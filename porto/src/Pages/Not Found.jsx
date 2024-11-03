// src/pages/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center text-center p-6">
            <h2 className="text-4xl font-bold text-gray-800">404</h2>
            <p className="text-lg text-gray-600 mt-2">Halaman yang Anda cari tidak ditemukan.</p>
            <Link to="/" className="text-blue-600 hover:underline mt-4">
                Kembali ke Beranda
            </Link>
        </div>
    );
};

export default NotFound;
