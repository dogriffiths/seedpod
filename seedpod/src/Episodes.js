import useFeed from "./useFeed";
import useQueryParam from "./useQueryParam";
import EpisodeList from "./components/EpisodeList";

const Episodes = () => {
    const url = useQueryParam('url')
    const {data: feed, error: feedError, loading: feedLoading} = useFeed(url)
    console.log('XXXXX feed', feed)

    return <div>
        {
            feed &&
            <h1>{feed.title}</h1>
        }
        {
            feed && feed.itunes && feed.itunes.image &&
                <img src={feed.itunes.image} style={{width: 100, height: 100, float: 'left', marginRight: 16, marginBottom: 16}}/>
        }
        {
            feed && feed.description
        }
        <br clear='all'/>
        <EpisodeList feed={feed} error={feedError} loading={feedLoading}/>
    </div>
}

export default Episodes;