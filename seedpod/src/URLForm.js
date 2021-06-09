import {useHistory} from "react-router-dom";
import {useState} from "react";

const URLForm = () => {
    const history = useHistory()
    const [url, setURL] = useState()

    return <>
        <input
            className='urlFeed'
            onChange={evt => setURL(evt.target.value)}
        />
        <button onClick={() => history.push('/episodes?url=' + encodeURIComponent(url))}>
            View URL
        </button>
    </>
}

export default URLForm;