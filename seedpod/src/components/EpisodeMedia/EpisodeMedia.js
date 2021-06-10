import {useState} from "react";
import './EpisodeMedia.css'

const EpisodeMedia = ({episode, image}) => {
    const [open, setOpen] = useState(false)

    if (!episode) {
        return null
    }

    const isVideo = episode.enclosure.type.indexOf('video') !== -1;

    return <div className='EpisodeMedia'>
        {
            image &&
            (
                isVideo ? (
                    (!open) &&
                    <img src={image}/>
                ) : (
                    <img src={image}/>
                )
            )
        }
        <button onClick={() => setOpen(t => !t)} className='file' data-src={episode.enclosure.url}>Open</button>
        {
            open && (episode.enclosure.type.indexOf('audio') !== -1
                ?
                <audio controls>
                    <source src={episode.enclosure.url} type={episode.enclosure.type}/>
                </audio>
                :
                <video controls poster={image}>
                    <source src={episode.enclosure.url} type={episode.enclosure.type}/>
                </video>)
        }
    </div>
}

export default EpisodeMedia;