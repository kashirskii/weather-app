import axios from "axios";

const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})

export default instance;