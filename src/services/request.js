import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const getLotteries = () => {    
    axios.get(`${BASE_URL}/loterias`, {
        headers: {
            Authorization: 'natalia-dias-queiroz-carver'
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log(error.response)
    })
}

export const getLotteriesContests = () => {
    axios.get(`${BASE_URL}/loterias-concursos`, {
        headers: {
            Authorization: 'natalia-dias-queiroz-carver'
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log(error.response)
    })
}

export const getContestsId = () => {
    axios.get(`${BASE_URL}/concursos/${id}`, {
        headers: {
            Authorization: 'natalia-dias-queiroz-carver'
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log(error.response)
    })
}