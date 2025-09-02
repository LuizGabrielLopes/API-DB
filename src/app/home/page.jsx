import React from 'react';
import Image from 'next/image';

export default function Home() {
return (
    <div className="flex justify-center items-center h-screen bg-gray-200 bg-[url('/img/goku.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col items-center justify-center w-3/5 h-3/5 rounded-lg p-8 text-center" style={{ backgroundColor: "rgba(98, 99, 89, 0.4)" }}>
            <h1 className="text-4xl font-bold text-white mb-4">Bem-vindo à Home</h1>
            <div className="w-24 h-24 rounded-full overflow-hidden my-4">
                <Image
                src="/img/gokussj3.jpg" 
                alt="Profile" 
                width={100}
                height={100}
                className="w-full h-full object-cover">
                </Image>
            </div>
            <h1 className="text-3xl text-white font-semibold mb-2">Luiz Gabriel Lopes Carvalho</h1>
            <h2 className="text-lg text-white mb-4">2TDS1 Senai Valinhos</h2>
            <p className="text-white mb-6 leading-relaxed">Estudante de Desenvolvimento de Sistemas no SENAI Valinhos. 
                Focado em adquirir conhecimentos técnicos e práticos 
                para atuar na área de tecnologia da informação.</p>
            <h1 className="text-xl text-white font-medium italic mb-2">" Não há lugar para a sabedoria onde não há paciência. "</h1>
            <p className="text-white text-sm">- Santo Agostinho</p>
        </div>
    </div>
);
}
