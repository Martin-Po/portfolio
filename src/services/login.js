import axios from 'axios'
const baseUrl = 'https://equipos.fly.dev/api/login'

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}



export default { login }