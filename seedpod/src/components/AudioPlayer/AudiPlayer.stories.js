import React from 'react';

import AudioPlayer from './AudioPlayer';

const audioURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp3';

export default {
    title: 'AudioPlayer',
    component: AudioPlayer,
};

export const Basic = () => <AudioPlayer/>;

export const WithSrc = () => <AudioPlayer
    src={audioURL}
/>;
