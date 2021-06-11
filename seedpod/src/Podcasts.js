import {Link} from "react-router-dom";

const Podcast = ({url, title, description, image}) => {
    return <Link to={'/episodes?url=' + encodeURIComponent(url)}>
        <div className='Podcast' style={{
            display: 'flex',
            flexDirection: 'column',
            fontDecoration: 'none',
            float: 'left',
            marginBottom: 16,
            marginRight: 16,
            color: 'white',
        }}>
            <img src={image} className='Podcast-image' style={{width: 200, height: 200}} alt={'Podcasts image'}
                 title={description}
            />
            <div className='Podcast-title'
                 style={{
                     maxWidth: 200,
                     overflow: 'hidden',
                     textOverflow: 'ellipsis',
                     whiteSpace: 'nowrap',
                     fontWeight: 'bold',
                     fontSize: '90%',
                 }}
            >
                {title}
            </div>
            <div className='Podcast-description'
                 style={{
                     maxWidth: 200,
                     overflow: 'hidden',
                     textOverflow: 'ellipsis',
                     whiteSpace: 'nowrap',
                     fontSize: '70%',
                 }}
            >
                {description}
            </div>
        </div>
    </Link>
}

const Podcasts = ({podcasts}) => {
    if (!podcasts) {
        return null;
    }

    return <div className='popular' style={{
        marginTop: 32
    }}>
        {
            podcasts.map(podcast => (
                <Podcast url={podcast.url} title={podcast.title} description={podcast.description}
                         image={podcast.image}/>
            ))
        }
    </div>
}

export default Podcasts;