import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData = (initialState, url)=>{
    const [data, setData] = useState(initialState)

    const getData=()=>{
        axios
        .get(`${url}`)
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error.data)
        })
    }

    useEffect(()=>{
        getData()
    }, [url])

    return [data, getData]

}
export default useRequestData