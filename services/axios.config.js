import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default axios;
