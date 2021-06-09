import useFeed from "./useFeed";

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