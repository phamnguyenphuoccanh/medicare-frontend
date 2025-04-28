import axiosInstance from './axiosInstance';

export const getMedicines = () => axiosInstance.get('/medicines');
export const getMedicineByCode = (code: string) => axiosInstance.get(`/medicines/${code}`);
export const addMedicine = (data: any) => axiosInstance.post('/medicines', data);
export const updateMedicine = (code: string, data: any) => axiosInstance.put(`/medicines/${code}`, data);
export const deleteMedicine = (code: string) => axiosInstance.delete(`/medicines/${code}`);
export const searchMedicinesByName = (name: string) => axiosInstance.get(`/medicines/search/by-name`, { params: { name } });
