import React from 'react';

const features = [
  { label: 'THUỐC', icon: '💊' },
  { label: 'HÓA ĐƠN', icon: '🧾' },
  { label: 'NHÂN VIÊN', icon: '👩‍⚕️' },
  { label: 'KHÁCH HÀNG', icon: '🧑‍🤝‍🧑' },
  { label: 'KHUYẾN MÃI', icon: '🎁' },
  { label: 'BÁN HÀNG', icon: '🛒' },
  { label: 'TÀI KHOẢN', icon: '👤' },
  { label: 'BÁO CÁO', icon: '📊' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">+</span>
          <span className="font-bold text-2xl text-blue-700">MEDICARE</span>
        </div>
        <nav className="flex-1 flex justify-center gap-8">
          <a className="font-semibold text-blue-700 border-b-2 border-blue-700 pb-1" href="#">Trang chủ</a>
          <a className="hover:text-blue-700" href="#">Thuốc</a>
          <a className="hover:text-blue-700" href="#">Hóa đơn</a>
          <a className="hover:text-blue-700" href="#">Nhân viên</a>
          <a className="hover:text-blue-700" href="#">Khách hàng</a>
          <a className="hover:text-blue-700" href="#">Báo cáo</a>
          <a className="hover:text-blue-700" href="#">Khuyến mãi</a>
        </nav>
        <div className="relative group">
          <button className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded hover:bg-blue-200">
            <span className="text-gray-700">Tennguoidung</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Tài khoản</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Bán hàng</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Đăng xuất</a>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center bg-blue-100 relative">
        <div className="absolute right-16 top-10 flex gap-6">
          <img src="https://img.freepik.com/free-vector/medicine-bottle-pills-capsules_107791-16825.jpg?w=200" className="w-40 h-40 object-contain" alt="bottle" />
          <img src="https://img.freepik.com/free-vector/medicine-bottle-pills-capsules_107791-16825.jpg?w=120" className="w-24 h-24 object-contain self-end" alt="bottle2" />
        </div>
        <h1 className="text-blue-700 text-5xl font-bold mb-6 mt-10">MEDICARE</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-xl font-semibold shadow mb-10">READ MORE</button>
        <div className="grid grid-cols-4 gap-8 bg-white rounded-xl p-8 shadow-lg">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-blue-50 rounded-xl shadow-md p-6 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-4xl mb-2">{f.icon}</span>
              <span className="font-bold text-lg text-black drop-shadow">{f.label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
