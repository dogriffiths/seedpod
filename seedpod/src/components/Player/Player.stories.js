import React from 'react';
import {MemoryRouter} from 'react-router-dom'

import Player from './Player';
import AudioProvider from "../../hooks/useAudio/AudioProvider";

const audioURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp3';
const videoURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp4';
const imageURL = 'http://192.168.1.177/media/movies/movies.jpg';

export default {
    title: 'Player',
    component: Player,
};

export const Basic = () => <MemoryRouter>
    <AudioProvider initialClip='http://192.168.1.177/media/movies/Andy%20Currant%20Specimens.mp3'>
    <Player/>
    </AudioProvider>
</MemoryRouter>;

export const WithAudioEpisode = () => <MemoryRouter>
    <AudioProvider initialClip='http://192.168.1.177/media/movies/Andy%20Currant%20Specimens.mp3'>
        <Player
            image={imageURL}
            episode={{
                content: '<p>This is an audio episode</p>',
                enclosure: {
                    url: audioURL,
                    type: 'audio/mpeg',
                }
            }}
            open
        />
    </AudioProvider>
</MemoryRouter>
;
