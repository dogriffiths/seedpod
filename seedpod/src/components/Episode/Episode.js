import parse from 'html-react-parser'
import EpisodeMedia from "../EpisodeMedia";

const Episode = ({episode, feed}) => {
    return <div className='Episode'>
        <div className='title'>{episode.title}</div>
        <div className='description'>{parse(episode.content)}</div>
        <div className='duration'>{episode.itunes.duration}</div>
        <EpisodeMedia episode={episode}/>
        <img className='image' src={episode.itunes.image || feed.itunes.image} width={300} height={300}
             alt='Episode illustration'/>
        <div className='fileType'>{episode.enclosure.type}</div>
        <div className='fileSize'>{episode.enclosure.length}</div>
    </div>
}

export default Episode;