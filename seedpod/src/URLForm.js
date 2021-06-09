import {useHistory} from "react-router-dom";

const URLForm = () => {
    const history = useHistory()


    return <>
        <input className='urlFeed'/>
        <button onClick={() => history.push('/episodes')}>
            View URL
        </button>
    </>
}

export default URLForm;