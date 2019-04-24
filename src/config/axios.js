import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://krzychnadev.me/cmapi/api'
  });

export default axiosInstance;
