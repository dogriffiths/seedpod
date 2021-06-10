import Parser from "rss-parser";
import {useEffect, useState} from "react";

const parser = new Parser()

const useFeed = (url) => {
    const [feed, setFeed] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        let canceled = false;
        setLoading(true);
//        setError(null)
        (async () => {

            try {
                let feedUrl = '/api/proxy?url=' + encodeURIComponent(url);
                const f = await parser.parseURL(feedUrl);

                if (!canceled) {
                    setFeed(f)
                }
            } catch (err) {
               setError(err.message)
            }
            setLoading(false)
        })();
        return () => canceled = true;
    }, [url])

    return {data: feed, loading, error}
}

export default useFeed;