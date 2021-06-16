import Podcasts from "./Podcasts";
import usePodcasts from "./hooks/usePodcasts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function scrollIntoView() {
    const element = document.getElementsByClassName('CategoryPodcasts')[0];
    if (element) {
        element.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});
    }
}

const CategoryPodcasts = () => {
    const {category} = useParams();
    const {
        data: podcasts
    } = usePodcasts(`/api/podcasts/categories/${category}`);

    useEffect(() => {
        scrollIntoView();
    }, []);

    return <div className='CategoryPodcasts'>
        <h1>{decodeURIComponent(category)}</h1>
        <Podcasts podcasts={podcasts}/>
        </div>;
}

export default CategoryPodcasts;