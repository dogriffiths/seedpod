import React from 'react';

import EpisodeList from './EpisodeList';

const audioURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp3';
const videoURL = 'http://192.168.1.177/media/movies/Bodies%20to%20Bones%20and%20Back.mp4';
const imageURL = 'http://192.168.1.177/media/movies/movies.jpg';

export default {
    title: 'EpisodeList',
    component: EpisodeList,
};

export const Basic = () => <EpisodeList/>;

export const WithFeed = () => <EpisodeList
    feed={{
        items: [
            {
                guid: '12344325454545',
                title: 'The title',
                contentSnippet: 'Description',
                itunes: {
                    image: imageURL,
                    duration: 100,
                },
                enclosure: {
                    type: 'audio/mpeg',
                    length: 4000,
                },
            },
            {
                guid: '12344325454545',
                title: 'The title',
                contentSnippet: 'Description',
                itunes: {
                    image: imageURL,
                    duration: 100,
                },
                enclosure: {
                    type: 'audio/mpeg',
                    length: 4000,
                },
            },
            {
                guid: '12344325454545',
                title: 'The title',
                contentSnippet: 'Description',
                itunes: {
                    image: imageURL,
                    duration: 100,
                },
                enclosure: {
                    type: 'audio/mpeg',
                    length: 4000,
                },
            },
        ]
    }}
/>;
