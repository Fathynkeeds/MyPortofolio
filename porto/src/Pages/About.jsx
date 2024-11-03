import React from 'react';
import aboutImage from '../assets/Sigit2.JPG';

const About = () => {
    return (
        <div className="p-6 flex flex-col items-center text-center animate-fadeInUp">
            <img src={aboutImage} alt="About" className="w-40 h-32 rounded-full mb-4 shadow-lg" />
            <h2 className="text-3xl font-bold text-gray-800">Tentang Saya</h2>
            <p className="mt-4 text-lg text-gray-600">
                Saya seorang programmer pemula yang fokus pada pengembangan web. Saya tertarik dengan frontend dan sangat suka belajar
                teknologi baru seperti React dan Tailwind CSS. Saat ini, saya sedang membangun proyek portofolio ini sebagai media untuk
                memamerkan hasil kerja saya.
            </p>
        </div>
    );
};

export default About;
