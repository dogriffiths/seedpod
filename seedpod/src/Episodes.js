import useFeed from "./useFeed";
import useQueryParam from "./useQueryParam";

const Episodes = () => {
    const url = useQueryParam('url')
    const {data: feed, error: feedError} = useFeed(url)
        console.log('XXXXXX feed', feed)

    if (feedError) {
        return <div className='error'>
            {feedError}
        </div>
    }

    return <div className='EpisodeList'>
        {
            feed && feed.items && feed.items.map(i => (
                <div className='Episode'>
                    <div className='title'>{i.title}</div>
                    <div className='description'>{i.content}</div>
                    <div className='duration'>{i.itunes.duration}</div>
                    <audio controls>
                        <source className='file' src={i.enclosure.url} type={i.enclosure.type}/>
                    </audio>
                    <img className='image' src={i.itunes.image || feed.itunes.image} width={300} height={300}/>
                    <div className='fileType'>{i.enclosure.type}</div>
                    <div className='fileSize'>{i.enclosure.length}</div>
                </div>
            ))
        }
        </div>
}

export default Episodes;