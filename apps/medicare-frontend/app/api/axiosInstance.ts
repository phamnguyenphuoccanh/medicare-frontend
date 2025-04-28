import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://aienthusiasm.vn:3003/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Nếu backend dùng cookie/session, giữ lại
});

export default axiosInstance;
