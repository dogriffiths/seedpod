import useFeed from "./useFeed";
import useQueryParam from "./useQueryParam";
import EpisodeList from "./components/EpisodeList";

const Episodes = () => {
    console.log('XXXXX EPISODES!')
    const url = useQueryParam('url')
    const {data: feed, error: feedError, loading: feedLoading} = useFeed(url)

    return <EpisodeList feed={feed} error={feedError} loading={feedLoading} />
}

export default Episodes;