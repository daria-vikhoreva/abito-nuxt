import axios from "axios";

const instance = axios.create({
    baseURL: 'http://45.132.19.237/',
});

export default instance