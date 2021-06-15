import Podcasts from "./Podcasts";
import usePodcasts from "./hooks/usePodcasts";
import {useParams} from "react-router-dom";

const CategoryPodcasts = () => {
    const {category} = useParams();
    const {
        data: podcasts
    } = usePodcasts(`/api/podcasts/categories/${category}`);

    return <>
        <h1>{decodeURIComponent(category)}</h1>
        <Podcasts podcasts={podcasts}/>
        </>;
}

export default CategoryPodcasts;