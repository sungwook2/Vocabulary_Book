import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
        })

    }, [url])

    return data;
}