import Podcasts from "./Podcasts";
import usePodcasts from "./hooks/usePodcasts";

const PopularPodcasts = () => {
    const {
        data: podcasts
    } = usePodcasts('/api/podcasts/popular');

    return <Podcasts podcasts={podcasts}/>;
}

export default PopularPodcasts;