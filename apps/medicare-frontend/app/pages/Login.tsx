import React, { useState } from 'react';
import { adminLogin, staffLogin } from '../api/authApi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'staff'>('admin');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const api = role === 'admin' ? adminLogin : staffLogin;
      const res = await api({ userName: username, password });
      alert('Đăng nhập thành công!');
     
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Đăng nhập thất bại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#22292f]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <form
        className="relative z-10 bg-white/90 rounded-xl shadow-2xl p-10 w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-black drop-shadow">Đăng nhập hệ thống</h2>
        <input
          type="text"
          className="rounded p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Tên tài khoản"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="rounded p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Mật khẩu"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className="flex items-center justify-between text-xs mt-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-600"
              checked={remember}
              onChange={e => setRemember(e.target.checked)}
            />
            Duy trì đăng nhập
          </label>
          <a href="#" className="text-red-500 hover:underline">Quên mật khẩu?</a>
        </div>
        <div className="flex gap-2 mt-2">
          <button
            type="button"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded border ${role === 'staff' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} hover:bg-blue-600 hover:text-white transition`}
            onClick={() => setRole('staff')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 3v18m6-18v18" /></svg>
            BÁN HÀNG
          </button>
          <button
            type="button"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded border ${role === 'admin' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} hover:bg-blue-600 hover:text-white transition`}
            onClick={() => setRole('admin')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-2.21 0-4-1.79-4-4h2a2 2 0 004 0h2c0 2.21-1.79 4-4 4z" /></svg>
            QUẢN LÝ
          </button>
        </div>
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition disabled:opacity-60"
        >
          {loading ? 'Đang đăng nhập...' : 'ĐĂNG NHẬP'}
        </button>
      </form>
      <div className="absolute top-10 left-10 z-10">
        <span className="text-5xl font-bold text-cyan-400 drop-shadow">MEDI<span className="text-blue-700">CARE</span></span>
      </div>
    </div>
  );
};

export default Login;
