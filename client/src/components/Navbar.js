import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Importar signOut de Firebase
import { auth } from '../firebaseConfig'; // Asegúrate de que el path esté correcto

function Navbar() {
    const navigate = useNavigate(); // Hook para redirigir
    const location = useLocation(); // Hook para obtener la ruta actual

    // Definir la función handleLogout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirigir al inicio de sesión después de cerrar sesión
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    // Determinar si se debe mostrar el botón "Get Started" o "Cerrar Sesión"
    const isOnAnalysisPage = location.pathname === '/analysis';
    const isOnLandingPage = location.pathname === '/';

    return (
        <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">SentimentAI</Link>
                <div className="space-x-4">
                    <Link to="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
                    <Link to="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">How It Works</Link>
                    {isOnAnalysisPage && (
                        <button
                            onClick={handleLogout}
                            className="ml-4 px-3 py-2 bg-red-500 text-white rounded-md"
                        >
                            Get the Hell Out
                        </button>
                    )}
                    {!isOnAnalysisPage && !isOnLandingPage && (
                        <Link to="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Get Started
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
