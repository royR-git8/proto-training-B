
import { useEffect, useState } from "react";
import React from "react";
import { Employee } from "./Employees";
const useEmployeeFetchData = (url: string): Employee[] => {
    const [fetchedData, useFetchedData] = React.useState<Employee[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();
                useFetchedData(json);
            } catch (error: any) {
                setError(error)
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData()
        setTimeout(() => {
        }, 500);
    }, [url]);
    return Array.isArray(fetchedData) ? (fetchedData as Employee[]) : [];
};
export default useEmployeeFetchData;