import axios from 'axios'

const instance = axios.create({
    baseUrl: `${appConfig.baseUrl}/api/`,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 90000
})

export default instance