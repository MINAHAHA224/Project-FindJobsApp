
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(endPoint, query) {


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
            'x-rapidapi-key': '7774efe3abmsh60d765ee8fcbd6bp1404efjsn5b4d253b60b2',
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