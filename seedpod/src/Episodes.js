import useFeed from "./useFeed";
import useQueryParam from "./useQueryParam";

const Episodes = () => {
    const url = useQueryParam('url')
    const {data: feed, error: feedError} = useFeed(url)

    if (feedError) {
        return <div className='error'>
            {feedError}
        </div>
    }

    return <>
        {
            feed && feed.items && feed.items.map(i => (
                <div className='Episode'>
                    <div className='title'>{i.title}</div>
                    <div className='description'>{i.content}</div>
                    <div className='duration'>{i.itunes.duration}</div>
                    <div className='file'>{i.enclosure.url}</div>
                    <div className='fileType'>{i.enclosure.type}</div>
                    <div className='fileSize'>{i.enclosure.length}</div>
                    <div className='image'>{i.itunes.image}</div>
                </div>
            ))
        }
        </>
}

export default Episodes;