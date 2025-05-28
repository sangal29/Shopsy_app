import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(url) {
            try {
                const data = await fetch(url);
                const dataJson = await data.json();
                setData(dataJson);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData(url);
    }, [url]);

    return { data, loading, error };
}

export default useFetch;