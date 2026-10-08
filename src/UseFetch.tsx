
import { useEffect, useState } from "react";
import type { Employee } from "./Employees";
import React from "react";
const useFetchData = (url: string): Employee[]=> {
    const [data, setData] = React.useState<Employee[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                console.log(data)
            } catch (error: any) {
                setError(error)
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData()

    }, [url]);


    return data;
};
export default useFetchData;