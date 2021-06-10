import React from 'react';

import Episode from './Episode';

const audioURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp3';
const videoURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp4';
const imageURL = 'http://192.168.1.177/media/movies/movies.jpg';

export default {
    title: 'Episode',
    component: Episode,
};

export const Basic = () => <Episode/>;

export const WithAudioEpisode = () => <Episode
    image={imageURL}
    feed={{
        itunes: {
            image: imageURL
        }
    }}
    episode={{
        title: 'Some episode',
        content: 'Some content about the thing that the episode is about written in English blah blah blah',
        itunes: {
            image: imageURL,
            duration: 100,
        },
        description: '<p>This is an audio episode</p>',
        enclosure: {
            url: audioURL,
            type: 'audio/mpeg',
            length: 1000,
        }
    }}
/>;

export const WithVideoEpisode = () => <Episode
    image={imageURL}
    feed={{
        itunes: {
            image: imageURL
        }
    }}
    episode={{
        title: 'Some episode',
        content: 'Some content',
        itunes: {
            image: imageURL,
            duration: 100,
        },
        description: '<p>This is an audio episode</p>',
        enclosure: {
            url: videoURL,
            type: 'video/mp4',
            length: 1000,
        }
    }}
/>;
