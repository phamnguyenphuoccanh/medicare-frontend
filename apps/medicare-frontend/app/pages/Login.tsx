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
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="./img/background.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Logo MEDICARE */}
      <div className="absolute w-[375px] h-[96px] top-[85px] right-[330px] z-10">
        <span
          className="font-['Inter'] font-semibold text-[79px] leading-[96px] tracking-[-0.07em] bg-gradient-to-r from-[#005D65] via-[#00A5CB] to-[#03D9FF] bg-clip-text text-transparent drop-shadow-[3px_6px_4px_rgba(0,0,0,0.25)]"
        >
          MEDICARE
        </span>
      </div>
    
      {/* Login Form */}
      <form
        className="absolute w-[531px] h-[479px] left-1/2 top-[246px] translate-x-[109px] bg-[rgba(225,241,254,0.6)] border border-[#D9D9D9] flex flex-col items-center p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="w-[286px] h-[35px] font-['Inter'] font-bold text-[29px] leading-[35px] text-black text-center mb-6">
          Đăng nhập hệ thống
        </h2>

        {/* Username Input */}
        <div className="w-[457px] mb-4">
          <input
            type="text"
            className="w-[457px] h-[40px] p-3 bg-[#F9F9F9] border border-[#444444] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
            placeholder="Tên tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="w-[457px] mb-6">
          <input
            type="password"
            className="w-[457px] h-[40px] p-3 bg-[#F9F9F9] border border-[#444444] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between w-[457px] text-sm mb-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              className="accent-blue-600 h-4 w-4"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Duy trì đăng nhập
          </label>
          <a href="#" className="text-red-500 hover:underline">
            Quên mật khẩu?
          </a>
        </div>

        {/* Role Selection Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            className={`w-[169px] h-[57px] bg-[#D3ECF8] border border-[#444444] rounded-[10px] flex items-center justify-center gap-2 ${
              role === 'staff'
                ? 'bg-blue-500 text-white border-blue-500'
                : 'text-blue-500 border-blue-500'
            } hover:bg-blue-600 hover:text-white transition-all duration-200`}
            onClick={() => setRole('staff')}
          >
            🛒 BÁN HÀNG
          </button>
          <button
            type="button"
            className={`w-[169px] h-[57px] bg-[#D3ECF8] border border-[#444444] rounded-[10px] flex items-center justify-center gap-2 ${
              role === 'admin'
                ? 'bg-blue-500 text-white border-blue-500'
                : 'text-blue-500 border-blue-500'
            } hover:bg-blue-600 hover:text-white transition-all duration-200`}
            onClick={() => setRole('admin')}
          >
            ⚙️ QUẢN LÝ
          </button>
        </div>


        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center mb-4 text-sm">{error}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-[457px] h-[50px] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-[10px] transition-all duration-200 disabled:opacity-60"
        >
          {loading ? 'Đang đăng nhập...' : 'ĐĂNG NHẬP'}
        </button>
      </form>
    </div>
  );
};

export default Login;