import parse from 'html-react-parser'
import './EpisodeMedia.css'
import {useEffect, useState} from "react";

const EpisodeMedia = ({episode, image, open, onPlaying}) => {
    const [neverOpen, setNeverOpen] = useState(true);
    const [displayDescription, setDisplayDescription] = useState('');

    useEffect(() => {
        if (open) {
            setNeverOpen(false);
        }
    }, [open]);

    const description = episode && (episode['content:encoded'] || episode.content);

    useEffect(() => {
        let dd = description
        try {
            dd = parse(description.replace(/font - size/g, 'font-size'));
        } catch(err) {
            console.error(err);
        }
        setDisplayDescription(dd)
    }, [description]);

    if (!episode) {
        return null
    }

    const isVideo = episode.enclosure.type.indexOf('video') !== -1;

    return <div className={`EpisodeMedia ${open ? '' : 'EpisodeMedia-closed'}`}>
        {
            (open && isVideo) &&
            <video controls poster={image} onPlaying={evt => onPlaying && onPlaying(evt)}>
                <source src={episode.enclosure.url} type={episode.enclosure.type}/>
            </video>
        }
        {
            (!open || !isVideo) &&
            <img
                src={(image && !neverOpen) ? image : 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}
                className='EpisodeMedia-image'
                alt='Episode illustration'/>
        }
        <div className='EpisodeMedia-details'>
            <div className='EpisodeMedia-detailsDescription'>
                {
                    displayDescription
                }
            </div>
            {
                open && (episode.enclosure.type.indexOf('audio') !== -1)
                    ?
                    <audio controls onPlaying={evt => onPlaying && onPlaying(evt)}>
                        <source src={episode.enclosure.url} type={episode.enclosure.type}/>
                    </audio>
                    : null
            }
        </div>
    </div>
}

export default EpisodeMedia;