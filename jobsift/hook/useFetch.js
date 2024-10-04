
import { useState, useEffect } from 'react'
import axios from 'axios'
import { RAPID_API_KEY } from '@env'


const rapidApiKey = RAPID_API_KEY


function useFetch(endPoint, query) {


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search${endPoint}`,
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
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