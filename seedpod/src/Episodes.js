import useFeed from "./useFeed";
import useQueryParam from "./useQueryParam";
import Episode from "./Episode";

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
                <Episode key={i.guid} episode={i} feed={feed}/>
            ))
        }
    </div>
}

export default Episodes;