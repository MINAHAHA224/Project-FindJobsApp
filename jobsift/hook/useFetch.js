
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(endPoint, query) {


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
            'x-rapidapi-key': 'dd08e616c9mshd98fb740fa0194cp1920edjsn61bf0c3af932',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query,
        }

    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);

        } catch (error) {
            setError(error);
            alert("There is an error");
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, reFetch };

}