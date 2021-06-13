import React from 'react';

import AudioPlayer from './AudioPlayer';
import AudioProvider from "../../hooks/useAudio/AudioProvider";

const audioURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp3';

export default {
    title: 'AudioPlayer',
    component: AudioPlayer,
};

export const Basic = () => <AudioProvider>
    <AudioPlayer/>
</AudioProvider>;

export const WithSrc = () => <AudioProvider>
    <AudioPlayer
        src={audioURL}
    />
</AudioProvider>;
