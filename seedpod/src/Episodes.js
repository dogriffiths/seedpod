import useFeed from "./useFeed";
import useQueryParam from "./useQueryParam";
import {useState} from "react";

const EpisodeMedia = ({i}) => {
    const [open, setOpen] = useState(false)

    return <>
        <button onClick={() => setOpen(t => !t)} className='file' data-src={i.enclosure.url}>Open</button>
        {
            open && (i.enclosure.type.indexOf('audio') !== -1
                ?
                <audio controls>
                    <source src={i.enclosure.url} type={i.enclosure.type}/>
                </audio>
                :
                <video controls>
                    <source src={i.enclosure.url} type={i.enclosure.type}/>
                </video>)
        }
    </>
}

const Episode = ({i, feed}) => {
    return <div className='Episode'>
        <div className='title'>{i.title}</div>
        <div className='description'>{i.content}</div>
        <div className='duration'>{i.itunes.duration}</div>
        <EpisodeMedia i={i}/>
        <img className='image' src={i.itunes.image || feed.itunes.image} width={300} height={300}/>
        <div className='fileType'>{i.enclosure.type}</div>
        <div className='fileSize'>{i.enclosure.length}</div>
    </div>
}

const Episodes = () => {
    const url = useQueryParam('url')
    const {data: feed, error: feedError} = useFeed(url)

    if (feedError) {
        return <div className='error'>
            {feedError}
        </div>
    }

    return <div className='EpisodeList'>
        {
            feed && feed.items && feed.items.map(i => (
                <Episode key={i.guid} i={i} feed={feed}/>
            ))
        }
    </div>
}

export default Episodes;