import {useLocation} from 'react-router-dom'

import useFeed from "./useFeed";

function useQueryParam(param) {
    const location = useLocation();
    return new URLSearchParams(location.search).get(param);
}

const Episodes = () => {
    const url = useQueryParam('url')
    const {data: feed, error: feedError} = useFeed(url)

    if (feedError) {
        return <div className='error'>
            {feedError}
        </div>
    }

    return <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
            <th>File</th>
            <th>File type</th>
            <th>File size</th>
            <th>Image</th>
        </tr>
        </thead>
        <tbody>
        {
            feed && feed.items && feed.items.map(i => (
                <tr>
                    <td>{i.title}</td>
                    <td>{i.content}</td>
                    <td>{i.itunes.duration}</td>
                    <td>{i.enclosure.url}</td>
                    <td>{i.enclosure.type}</td>
                    <td>{i.enclosure.length}</td>
                    <td>{i.itunes.image}</td>
                </tr>
            ))
        }
        </tbody>
    </table>
}

export default Episodes;