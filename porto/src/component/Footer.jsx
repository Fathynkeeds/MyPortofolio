import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Sigit Fathoni. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    {/* Email */}
                    <a href="mailto:sigitfathoni51@gmail.com" className="text-gray-400 hover:text-white">
                        <FaEnvelope size={20} />
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/fathynkeeds_14/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaInstagram size={20} />
                    </a>
                    {/* Facebook */}
                    <a href="https://web.facebook.com/shygit.fathynkeeds/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaFacebook size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
