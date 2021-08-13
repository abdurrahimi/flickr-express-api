import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/',
    //headers: { 'X-Auth-Token' : '<some-token>'}
    params: {
        api_key: '34aad70cbec9de89332060bfb60ddf6f'
    }
});

export default axiosInstance;