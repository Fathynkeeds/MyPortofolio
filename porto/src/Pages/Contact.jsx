import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="p-6 flex flex-col items-center text-center animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-800">Hubungi Saya</h2>
            <p className="mt-4 text-lg text-gray-600">
                Saya selalu terbuka untuk kolaborasi dan diskusi! Jangan ragu untuk menghubungi saya melalui kontak yang tertera di bawah ini:
            </p>

            <div className="flex flex-col items-center mt-6 space-y-4">
                <a href="mailto:sigitfathoni51@gmail.com" className="flex items-center text-blue-600 hover:underline space-x-2">
                    <FaEnvelope size={24} />
                    <span>Email</span>
                </a>
                <a href="https://www.instagram.com/fathynkeeds_14/" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:underline space-x-2">
                    <FaInstagram size={24} />
                    <span>Instagram</span>
                </a>
                <a href="https://web.facebook.com/shygit.fathynkeeds/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline space-x-2">
                    <FaFacebook size={24} />
                    <span>Facebook</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
