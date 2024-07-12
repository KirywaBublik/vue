import axios from "axios";
import type {Ref} from "vue";

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export const dataFetch = async (query: string, data: Ref<string>) => {
    try {
        const response = await axios.get(`${BASE_URL}/${query}`)
        return data.value = response.data
    }
    catch (error){
        console.log(error)
    }
}