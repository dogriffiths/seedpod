import parse from 'html-react-parser'
import EpisodeMedia from "../EpisodeMedia";
import {useState} from "react";
import './Episode.css';

const Episode = ({episode, feed}) => {
    const [open, setOpen] = useState(false);

    if (!episode) {
        return null;
    }
    const description = episode.contentSnippet || episode.content;

    return <div className='Episode'>
        <div
            className='Episode-details'
            onClick={() => setOpen(t => !t)}
            data-src={episode.enclosure.url}
        >
            <div className='Episode-detailsText'>
                <div className='Episode-title'>{episode.title}</div>
                <div className='Episode-description'>
                    {
                        description && parse(description)
                    }
                </div>
            </div>
            <div className='Episode-detailsFile'>
                <div className='Episode-detailsFileField'>
                    <strong>Duration:</strong>
                    <div className='duration Episode-detailsFileFieldValue'>{episode.itunes.duration}</div>
                </div>
                <div className='Episode-detailsFileField'>
                    <strong>Media type:</strong>
                    <div className='fileType Episode-detailsFileFieldValue'>{episode.enclosure.type}</div>
                </div>
                <div className='Episode-detailsFileField'>
                    <strong>File size:</strong>
                    <div className='fileSize Episode-detailsFileFieldValue'>{episode.enclosure.length}</div>
                </div>
            </div>
        </div>
        {
            open &&
            <EpisodeMedia
                episode={episode}
                image={episode.itunes.image || feed.itunes.image}
                open
            />
        }
    </div>
}

export default Episode;