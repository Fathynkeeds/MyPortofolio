import React from 'react';
import profileImage from '../assets/SIgit1.JPG';

const Home = () => {
    return (
        <div className="flex flex-col items-center text-center p-6 animate-fadeInUp">
            <img src={profileImage} alt="Profile" className="w-40 h-32 rounded-full mb-4 shadow-lg" />
            <h1 className="text-3xl font-bold text-gray-800">Selamat Datang di Portofolio Saya</h1>
            <p className="mt-4 text-lg text-gray-600">
                Hai! Nama saya Sigit Fathoni. Saya seorang Mahasiswa yang bergerak di bidang IT. Salam Kenal semua nya, dan selamat datang.
            </p>
            <p className="mt-4 text-lg text-gray-600">
                Saat ini portofolio saya masih sedikit, mari ikuti perkembangan saya seiring berjalannya waktu.
            </p>
        </div>
    );
};

export default Home;
