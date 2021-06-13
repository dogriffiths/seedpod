import AudioContext from './AudioContext'
import {useState} from "react";

const clips = {};

const AudioProvider = (props) => {
    const [currentClip, setCurrentClip] = useState();

    const listener = function (evt) {
        const url = evt.target.src;
        for (let cu in clips) {
            if (cu && cu !== url) {
                clips[cu].pause();
            }
        }
        setCurrentClip(url);
    };

    const getClip = function (url) {
        if (url in clips) {
            clips[url].onplaying = listener;
            return clips[url];
        }
        let audio = new Audio(url);
        clips[url] = audio;
        audio.onplaying = listener;
        return audio;
    };
    return (
        <AudioContext.Provider
            value={{
                get: getClip,
                current: () => {
                    return currentClip;
                }
            }}
        >
            {props.children}
        </AudioContext.Provider>
    )
}

export default AudioProvider