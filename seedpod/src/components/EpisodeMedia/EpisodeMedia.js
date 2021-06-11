import parse from 'html-react-parser'
import './EpisodeMedia.css'

const EpisodeMedia = ({episode, image, open, onPlaying}) => {
    if (!episode) {
        return null
    }

    const isVideo = episode.enclosure.type.indexOf('video') !== -1;
    const description = episode['content:encoded'] || episode.content;

    return <div className={`EpisodeMedia ${open ? '' : 'EpisodeMedia-closed'}`}>
        {
            (open && isVideo) &&
            <video controls poster={image} onPlaying={evt => onPlaying && onPlaying(evt)}>
                <source src={episode.enclosure.url} type={episode.enclosure.type}/>
            </video>
        }
        {
            (!open || !isVideo) &&
            <img
                src={image ? image : 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}
                className='EpisodeMedia-image'
                alt='Episode illustration'/>
        }
        <div className='EpisodeMedia-details'>
            <div className='EpisodeMedia-detailsDescription'>
                {
                    description &&
                    parse(description)
                }
            </div>
            {
                open && (episode.enclosure.type.indexOf('audio') !== -1)
                    ?
                    <audio controls onPlaying={evt => onPlaying && onPlaying(evt)}>
                        <source src={episode.enclosure.url} type={episode.enclosure.type}/>
                    </audio>
                    : null
            }
        </div>
    </div>
}

export default EpisodeMedia;