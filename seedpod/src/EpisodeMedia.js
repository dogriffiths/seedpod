import {useState} from "react";

const EpisodeMedia = ({episode}) => {
    const [open, setOpen] = useState(false)

    return <>
        <button onClick={() => setOpen(t => !t)} className='file' data-src={episode.enclosure.url}>Open</button>
        {
            open && (episode.enclosure.type.indexOf('audio') !== -1
                ?
                <audio controls>
                    <source src={episode.enclosure.url} type={episode.enclosure.type}/>
                </audio>
                :
                <video controls>
                    <source src={episode.enclosure.url} type={episode.enclosure.type}/>
                </video>)
        }
    </>
}

export default EpisodeMedia;