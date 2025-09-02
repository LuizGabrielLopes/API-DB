import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-300 bg-[url('/img/kamehouse.jpg')] bg-cover bg-center">
            <div className="flex flex-col items-center justify-center rounded-lg p-8 w-3/5" style={{ backgroundColor: "rgba(247, 231, 17, 0.75)" }}>
                <Image
                    src="/dblogo.png"
                    alt="Dragon Ball Logo"
                    width={300}
                    height={100}
                    className="w-1/3 mb-4"
                />

                <div className="flex flex-col items-center text-center gap-4">
                    <h1 className="text-5xl font-bold text-black">Dragon Ball API</h1>
                    <p className="text-2xl text-black">
                        Explore seus personagens favoritos do universo de Dragon Ball !
                    </p>
                </div>

                <div className="flex gap-4 mt-6">

                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Ver Personagens
                    </button>

                    <Link href="/home">
                        <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                            Ir para home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}