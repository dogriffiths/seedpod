import Parser from "rss-parser";
import {useEffect, useState} from "react";

const parser = new Parser()

const useFeed = (url) => {
    const [feed, setFeed] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let canceled = false;
        setLoading(true);
        (async () => {

            const f = await parser.parseURL(url);

            f.items.forEach(item => {
                console.log(item.title + ':' + item.link)
            });

            if (!canceled) {
                setFeed(f)
            }
            setLoading(false)
        })();
        return () => canceled = true;
    }, [])

    return {data: feed, loading}
}

export default useFeed;