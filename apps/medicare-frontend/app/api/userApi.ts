import axiosInstance from './axiosInstance';

export const getEmployees = () => axiosInstance.get('/users/employees');
