import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.spacexdata.com';

const useAxios = (endpoint: string) => {
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get(endpoint)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // custom hook returns value
    return { response, error, loading };
};

export default useAxios;