import {useEffect, useRef, useState} from "react";
import useClock from "../../useClock";
import useAudio from "../../hooks/useAudio";
import './AudioPlayer.css';

function numString(x) {
    if ('' + x !== 'NaN') {
        return '' + x;
    }
    return '--';
}

function zeroPad(x) {
    if (x < 10) {
        return '0' + x;
    }
    return numString(x);
}

function formatTime(t) {
    let secs = t;
    const hours = Math.trunc(secs / (60 * 60));
    secs = secs - (hours * 60 * 60)
    const minutes = Math.trunc(secs / (60));
    secs = secs - (minutes * 60)
    const seconds = Math.trunc(secs);
    let result = '';
    if (hours > 0) {
        result += zeroPad(hours) + ':';
    }
    if (minutes > 0) {
        result += zeroPad(minutes) + ':';
    } else {
        result += numString(minutes) + ':';
    }
    result += zeroPad(seconds);
    return result;
}

const AudioPlayer = ({src, title, description, longDescription, image}) => {
    const audio = useAudio();
    const clip = useRef();
    const [canPlay, setCanPlay] = useState(false);
    const [paused, setPaused] = useState(false);
    const clock = useClock(1000);

    useEffect(() => {
        if (audio.get) {
            clip.current = audio.get(src, title, description, image, longDescription);
        }
    }, [src]);

    useEffect(() => {
        let listener = evt => {
            setCanPlay(true);
        };
        if (clip.current) {
            if (clip.current.audio.readyState >= 2) {
                setCanPlay(true);
            }
            clip.current.audio.addEventListener('canplay', listener);
        }
        return () => {
            if (clip.current) {
                clip.current.audio.removeEventListener('canplay', listener);
            }
        }
    }, [clip.current]);

    useEffect(() => {
        if (clip.current) {
            setPaused(clip.current.audio.paused);
        }
    }, [clip.current && clip.current.audio.paused]);

    return <div className='AudioPlayer'
                onKeyPress={(evt) => {
                    if (evt.key === ' ') {
                        if (clip.current.audio.paused) {
                            clip.current.audio.play();
                            setPaused(false);
                        } else {
                            clip.current.audio.pause();
                            setPaused(true);
                        }
                        evt.preventDefault();
                    }
                }}
    >
        <div className='AudioPlayer-playButton'
             role='button'
             tabIndex={0}
             onClick={() => {
                 if (clip.current) {
                     if (clip.current.audio.paused) {
                         clip.current.audio.play();
                         setPaused(false);
                     } else {
                         clip.current.audio.pause();
                         setPaused(true);
                     }
                 }
             }}
        >
            {
                (clip && canPlay) ?
                    <img
                        src={paused ? '/play.svg' : 'pause.svg'}
                    />
                    :
                    <img
                        src={'loading-buffering.gif'}
                        className='loading'
                    />
            }
        </div>
        <div className='AudioPlayer-time'>
            <div className='AudioPlayer-timeSummary'>
                <div className='AudioPlayer-currentTime'>{clip.current && formatTime(clip.current.audio.currentTime)}</div>
                /
                {clip.current && formatTime(clip.current.audio.duration)}
            </div>

            <input
                className='AudioPlayer-timeController'
                type="range"
                min={0}
                max={clip.current ? clip.current.audio.duration : 0} value={clip.current ? clip.current.audio.currentTime : 0}
                onChange={evt => {
                    if (clip.current) {
                        if (clip.current.audio.fastSeek) {
                            clip.current.audio.fastSeek(evt.target.value);
                        } else {
                            clip.current.audio.currentTime = evt.target.value;
                        }
                    }
                }}
            />
        </div>
    </div>
};

export default AudioPlayer;