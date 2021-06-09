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