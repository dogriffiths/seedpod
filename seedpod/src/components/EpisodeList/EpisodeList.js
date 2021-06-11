import Episode from "../Episode";
import {useRef} from "react";

const EpisodeList = ({error, loading, feed}) => {
    const currentMedia = useRef();

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div className='error'>
            {error}
        </div>
    }

    return <div className='EpisodeList'>
        {
            feed && feed.items && feed.items.map(i => (
                <Episode key={i.guid} episode={i} feed={feed}
                         onPlaying={evt => {
                             if (currentMedia.current && currentMedia.current !== evt.target) {
                                 currentMedia.current.pause();
                             }
                             currentMedia.current = evt.target;
                         }}
                />
            ))
        }
    </div>
}

export default EpisodeList;