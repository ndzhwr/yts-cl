import { Dispatch } from '@reduxjs/toolkit'
export const useFetch = async (url: string) => {
    try {
        let res =  await fetch(url);
        const {data}  =  await res.json();
        // console.log(data);
        return  data.movies;
    } catch (err : any) {
        console.log(err.message);
    }
}
