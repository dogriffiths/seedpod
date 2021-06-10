import Episode from "../Episode";

const EpisodeList = ({error, loading, feed}) => {
    if (error) {
        return <div className='error'>
            {error}
        </div>
    }

    return <div className='EpisodeList'>
        {
            feed && feed.items && feed.items.map(i => (
                <Episode key={i.guid} episode={i} feed={feed}/>
            ))
        }
    </div>
}

export default EpisodeList;