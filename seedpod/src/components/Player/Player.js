import useAudio from "../../hooks/useAudio";
import {useEffect, useState} from "react";
import parse from "html-react-parser";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import {Redirect} from 'react-router-dom';
import './Player.css';

const Player = () => {
    const audio = useAudio();
    const currentAudio = audio && audio.current && audio.current();
    const currentAudioURL = currentAudio && currentAudio.url;
    const title = currentAudio && currentAudio.title;
    const image = currentAudio && currentAudio.image;
    const podcastImage = currentAudio && currentAudio.podcastImage;
    const shortDescription = currentAudio && currentAudio.description;
    const description = (currentAudio && currentAudio.longDescription) || shortDescription;
    const [displayDescription, setDisplayDescription] = useState('');

    useEffect(() => {
        let dd = description
        try {
            dd = parse(description.replace(/font - size/g, 'font-size'));
        } catch (err) {
            console.error(err);
        }
        setDisplayDescription(dd)
    }, [description]);

    if (Object.keys(audio).length === 0) {
        throw new Error('Should be wrapped in an AudioProvider')
    }

    if (!currentAudioURL) {
        return <Redirect to='/'/>;
    }

    const isVideo = false // episode.enclosure.type.indexOf('video') !== -1;

    return <div className='Player'>
        <div className='Player-info'>
            <div className='Player-poster'>
                {
                    (!isVideo) &&
                    <img
                        src={image ? image
                            :
                            'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                        }
                        style={{
                            backgroundImage: `url(${podcastImage ? podcastImage
                                :
                                'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='})`,
                            backgroundSize: 'cover'
                        }}
                        className='Player-image'
                        alt='Episode illustration'
                    />
                }
            </div>
            <div className='Player-detailsDescription'>
                <h1>{title}</h1>
                {
                    displayDescription
                }
            </div>
        </div>
        <div className='Player-controls'>
            {
                (!isVideo)
                    ?
                    <AudioPlayer src={currentAudioURL} title={title} description={shortDescription} image={image}/>
                    : null
            }
        </div>
    </div>

}

export default Player;