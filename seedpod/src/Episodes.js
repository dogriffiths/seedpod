import Parser from 'rss-parser'
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

const Episodes = () => {
    const {data: feed} = useFeed('http://www.example.com/podcast.rss')

    return <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {
            feed && feed.items && feed.items.map(i => (
            <tr>
            <td>{i.title}</td>
            <td>{i.content}</td>
            </tr>
            ))
        }
        </tbody>
    </table>
}

export default Episodes;