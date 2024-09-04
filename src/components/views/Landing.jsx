import React, { useState } from "react";
import LoginPanel from "../inc/LoginPanel"; // Asegúrate de ajustar la ruta

import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
    const [showLoginPanel, setShowLoginPanel] = useState(false);

    const handleLoginClick = () => {
        setShowLoginPanel(true);
    };

    const handleClosePanel = () => {
        setShowLoginPanel(false);
    };

    return (
        <div
            className="bg-black bg-opacity-50 flex items-center justify-center w-full min-h-screen"
            style={{
                backgroundImage:
                    'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgW-aNjPCgZCqs-IW6tNnJgd1QQJUAGOfo-r61ePSTD3274qhT8Gf4-wWCJ43usRAAQVa7d_nDCG7JbnHnewbm0r2HSKR9JVZKYU51lsCF_eJzaPoTV9CERRXWsGVPi5vF0Lz1fv_ek4una/s1600/DSC_5374.JPG")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-black bg-opacity-50 flex flex-col items-center justify-center w-full min-h-screen">
                <div className="w-full">
                    <div className="text-left mb-48 mt-52 ml-28">
                        <div className="flex uppercase font-bold">
                            <h1 className="text-red-50 text-5xl">Welcome to </h1>
                            <h1 className="text-yellow-700 text-5xl ml-5">Medical Center</h1>
                        </div>

                        <h1 className="text-red-50 font-mono italic tracking-wide text-2xl mb-2 mt-6">
                            Cuidamos de ti.
                        </h1>
                        <button 
                            className="text-gray-100 bg-yellow-700 text-center flex items-center justify-center w-20 h-11 mt-10 border-1 hover:bg-yellow-800"
                            onClick={handleLoginClick}
                        >
                            LOGIN
                        </button>
                    </div>
                </div>

                <div className="flex bg-black bg-opacity-50 p-4 rounded h-4 text-center flex items-center justify-center">
                    <h2 className="text-red-50">
                        You do not have an account?
                    </h2>
                    <Link to="/signup">
                        <h2 className="text-red-50 ml-2 text-yellow-600 underline">Sign up</h2>
                    </Link>
                </div>
            </div>

            {showLoginPanel && <LoginPanel onClose={handleClosePanel} />}
        </div>
    );
};

export default Landing;
