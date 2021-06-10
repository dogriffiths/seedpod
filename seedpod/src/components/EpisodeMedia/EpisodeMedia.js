import parse from 'html-react-parser'
import './EpisodeMedia.css'

const EpisodeMedia = ({episode, image, open}) => {
    if (!episode) {
        return null
    }

    const isVideo = episode.enclosure.type.indexOf('video') !== -1;
    const description = episode['content:encoded'] || episode.content;

    return <div className='EpisodeMedia'>
        {
            open && image &&
            (
                isVideo ? (
                    <video controls poster={image}>
                        <source src={episode.enclosure.url} type={episode.enclosure.type}/>
                    </video>
                ) : (
                    <img src={image}/>
                )
            )
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
                    <audio controls>
                        <source src={episode.enclosure.url} type={episode.enclosure.type}/>
                    </audio>
                    : null
            }
        </div>
    </div>
}

export default EpisodeMedia;