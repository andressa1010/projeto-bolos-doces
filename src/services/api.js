import axios from "axios"


const api = axios.create({
    baseURL:"https://api-avaliacoes.onrender.com"
})

export default api 