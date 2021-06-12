import useFeed from "./useFeed";
import useQueryParam from "./useQueryParam";
import EpisodeList from "./components/EpisodeList";

const Episodes = () => {
    const url = useQueryParam('url')
    const {data: feed, error: feedError, loading: feedLoading} = useFeed(url)
    console.log('XXXX feed', feed)

    return <EpisodeList feed={feed} error={feedError} loading={feedLoading} />
}

export default Episodes;