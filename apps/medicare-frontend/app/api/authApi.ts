import axiosInstance from './axiosInstance';

// Admin Auth
export const adminRegister = (data: { userName: string; password: string }) =>
  axiosInstance.post('/v1/auth/admin/register', data);

export const adminLogin = (data: { userName: string; password: string }) =>
  axiosInstance.post('/v1/auth/admin/login', data);

export const adminLogout = () =>
  axiosInstance.post('/v1/auth/admin/logout');

// Staff Auth
export const staffRegister = (data: { userName: string; password: string }) =>
  axiosInstance.post('/v1/auth/staff/register', data);

export const staffLogin = (data: { userName: string; password: string }) =>
  axiosInstance.post('/v1/auth/staff/login', data);

export const staffLogout = () =>
  axiosInstance.post('/v1/auth/staff/logout');
