import usePersistentState from "../usePersistentState";
import {useEffect, useState} from "react";

const usePodcasts = (url) => {
    const [data, setData] = usePersistentState(url, []);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        let canceled = false;
        (async() => {
            try {
                if ((!data) || (data.length === 0)) {
                    setLoading(true)
                }
                const response = await fetch(url)
                if (!response.ok) {
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

export default usePodcasts;