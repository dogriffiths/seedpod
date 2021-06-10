import React from 'react';

import EpisodeMedia from './EpisodeMedia';

const audioURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp3';
const videoURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp4';
const imageURL = 'http://192.168.1.177/media/movies/movies.jpg';

export default {
    title: 'EpisodeMedia',
    component: EpisodeMedia,
};

export const Basic = () => <EpisodeMedia/>;

export const WithAudioEpisode = () => <EpisodeMedia
    image={imageURL}
    episode={{
        description: '<p>This is an audio episode</p>',
        enclosure: {
            url: audioURL,
            type: 'audio/mpeg',
        }
    }}
    open
/>;

export const WithVideoEpisode = () => <EpisodeMedia
    image={imageURL}
    episode={{
        description: '<p>This is a video</p>',
        enclosure: {
            url: videoURL,
            type: 'video/mp4',
        }
    }}
    open
/>;
