import useSWR from "swr";
import axios, { Axios, type AxiosResponse } from "axios";
import type { Employee } from "./types";

export function useEmployees({query}: {query?: string}) {
    const url = query === undefined ? "http://localhost:3000/employees" : `http://localhost:3000/employees?q=${query}`

    const {data, error,isLoading} = useSWR<AxiosResponse<Array<Employee>>>(url,axios);

    return {
        employees: data?.data ,
        error,
        isLoading
    }
}