
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const LoginPanel = ({ onClose }) => {
    const handleClose = () => {
        if (onClose) onClose(); // Llama a la función onClose pasada como prop
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                    {/* Botón de cerrar */}
                    <button 
                        onClick={handleClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <form className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-6">Iniciar Sesión</h1>
                        <div className="text-left flex flex-col w-full">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 border h-9 bg-gray-300 border-gray-900 rounded-md"
                            />
                            <label htmlFor="password" className="mt-4">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 border h-9 bg-gray-300 border-gray-900 rounded-md"
                            />
                        </div>
                        <button type="submit" className="mt-8 border w-full h-10 bg-gray-500 text-white rounded-md">Ingresar</button>
                        <h4 className="mt-6 text-base">Or login with</h4>
                        <button className="flex mt-4 items-center justify-center bg-white text-gray-700 w-full rounded-md shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <img
                                className="w-6 h-6 mr-2"
                                src="https://entredichos.trabajosocial.unlp.edu.ar/wp-content/uploads/sites/6/2016/12/Google_-G-_Logo.svg_.png"
                                alt="Google Logo"
                            />
                            <span className="font-semibold">Log in with Google</span>
                        </button>
                        <Link to="/signup"><h3 className="mt-6 text-blue-500 underline">Crear cuenta</h3></Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPanel;
