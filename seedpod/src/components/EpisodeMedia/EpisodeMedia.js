import parse from 'html-react-parser'
import './EpisodeMedia.css'
import {useEffect, useState} from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const EpisodeMedia = ({episode, image, open, podcastImage}) => {
    const [neverOpen, setNeverOpen] = useState(true);
    const [displayDescription, setDisplayDescription] = useState('');

    useEffect(() => {
        if (open) {
            setNeverOpen(false);
        }
    }, [open]);

    const title = episode && episode.title;
    const description = episode && (episode['content:encoded'] || episode.content);
    const shortDescription = episode && (episode.contentSnippet || episode.content);

    useEffect(() => {
        let dd = description
        try {
            dd = parse(description.replace(/font - size/g, 'font-size'));
        } catch (err) {
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
            <video controls poster={image}>
                <source src={episode.enclosure && episode.enclosure.url} type={episode.enclosure && episode.enclosure.type}/>
            </video>
        }
        {
            (!open || !isVideo) &&
            <img
                src={(image && !neverOpen) ? image
                    :
                    'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                }
                style={{
                    backgroundImage: `url(${(podcastImage && !neverOpen) ? podcastImage
                        :
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='})`,
                    backgroundSize: 'cover'
                }}
                className='EpisodeMedia-image'
                alt='Episode illustration'
            />
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
                    <AudioPlayer
                        src={episode.enclosure.url}
                        title={title}
                        description={shortDescription}
                        longDescription={description}
                        image={image}
                    />
                    : null
            }
        </div>
    </div>
}

export default EpisodeMedia;