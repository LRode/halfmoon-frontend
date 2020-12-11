import axios from './axios.config';

const fetcher = (url) => {
    console.log('fetcher', url);
    return axios.get(url).then(res => res.data);
};

export default fetcher;
