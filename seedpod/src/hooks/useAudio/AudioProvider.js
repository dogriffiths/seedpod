import AudioContext from './AudioContext'
import {useEffect, useState} from "react";

const clips = {};

const AudioProvider = ({children, initialClip}) => {
    const [currentClip, setCurrentClip] = useState(initialClip);

    useEffect(() => {
        if (initialClip) {
            clips[initialClip] = {
                url: initialClip,
                audio: new Audio(initialClip),
                description: 'XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX ',
                image: 'http://192.168.1.177/media/movies/movies.jpg'
            }
        }
    }, [initialClip]);

    const listener = function (evt) {
        const url = evt.target.src;
        for (let cu in clips) {
            if (cu && cu !== url) {
                clips[cu].audio.pause();
            }
        }
        setCurrentClip(url);
    };

    const getClip = function (url, title, description, image, longDescription) {
        if (url in clips) {
            clips[url].audio.onplaying = listener;
            return clips[url];
        }
        let audio = new Audio(url);
        clips[url] = {
            audio,
            title,
            description,
            url,
            image,
            longDescription
        };
        audio.onplaying = listener;
        return clips[url];
    };
    return (
        <AudioContext.Provider
            value={{
                get: getClip,
                current: () => {
                    return currentClip && clips[currentClip];
                }
            }}
        >
            {children}
        </AudioContext.Provider>
    )
}

export default AudioProvider