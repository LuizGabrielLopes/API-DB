"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd'

export default function Home() {
return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-[url('/img/goku.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col items-center justify-center w-full max-w-xl h-5/6 rounded-2xl p-10 text-center shadow-2xl backdrop-blur-md border border-gray-400 animate-fade-in" style={{ backgroundColor: "rgba(40, 40, 40, 0.65)" }}>
            <h1 className="text-5xl font-extrabold text-yellow-300 mb-6 drop-shadow-lg tracking-wide animate-slide-down">Bem-vindo à Home</h1>
            <div className="w-28 h-28 rounded-full overflow-hidden my-6 border-4 border-yellow-400 shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                    src="/img/gokussj3.jpg"
                    alt="Profile"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-3xl text-white font-semibold mb-2">Luiz Gabriel Lopes Carvalho</h1>
            <h2 className="text-lg text-gray-200 mb-4">2TDS1 Senai Valinhos</h2>
            <p className="text-gray-100 mb-6 leading-relaxed text-base">Estudante de Desenvolvimento de Sistemas no SENAI Valinhos.<br />Focado em adquirir conhecimentos técnicos e práticos para atuar na área de tecnologia da informação.</p>
            <h1 className="text-xl text-yellow-200 font-medium italic mb-2">" Não há lugar para a sabedoria onde não há paciência. "</h1>
            <p className="text-gray-300 text-sm mb-8">- Santo Agostinho</p>

            <Link href="/sobre">
                <Button type="primary">
                    Ver mais sobre a API
                </Button>
            </Link>

        </div>
        <style jsx>{`
            .animate-fade-in {
                animation: fadeIn 1.2s ease;
            }
            .animate-slide-down {
                animation: slideDown 1s ease;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-30px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `}</style>
    </div>
);
}
