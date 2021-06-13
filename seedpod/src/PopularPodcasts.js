import Podcasts from "./Podcasts";
import {useEffect, useState} from "react";
import useAudio from "./hooks/useAudio";

const usePodcasts = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const audio = useAudio();

    useEffect(() => {
        let canceled = false;
        (async() => {
            try {
                setLoading(true)
                const response = await fetch(url)
                if (!response.ok) {
                    const text = await response.text()
                    throw new Error(
                        `Unable to read: ${url}`
                    )
                }
                const body = await response.json()
                if (!canceled) {
                    setData(body)
                }
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        })();
        return () => canceled = true;
    }, [url])

    return {
        data,
        loading,
        error
    }
}

const PopularPodcasts = () => {
    const {
        data: podcasts
    } = usePodcasts('/api/podcasts/popular');

    return <Podcasts podcasts={podcasts}/>;
}

export default PopularPodcasts;