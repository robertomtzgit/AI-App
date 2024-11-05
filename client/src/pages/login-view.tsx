import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
    setIsLoading(false);
  };

  const carouselItems = [
    {
      text: 'Track sentiment across social media in real-time.',
      image: 'https://via.placeholder.com/150'
    },
    {
      text: 'Trusted by leading brands around the world.',
      image: 'https://via.placeholder.com/150'
    },
    {
      text: 'Gain insights to improve customer satisfaction.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-teal-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Carousel Section */}
        <div className="w-1/2 p-8 hidden lg:flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-teal-600 text-white space-y-6">
          <h3 className="text-2xl font-bold">Why Choose SentimentAI?</h3>
          <img src={carouselItems[carouselIndex].image} alt="Carousel" className="h-32 w-32 rounded-full"/>
          <p className="text-center text-lg">{carouselItems[carouselIndex].text}</p>
        </div>
        
        {/* Login Form Section */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex flex-col items-center">
            <img
              className="h-16 w-16 mb-4"
              src="https://via.placeholder.com/80"
              alt="Logo"
            />
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Welcome Back!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Log in to continue with your sentiment analysis
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>
          <div className="text-center mt-4 text-sm text-gray-500">
            <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Register here
            </Link>
          </p>
          <footer className="text-center text-xs text-gray-400 mt-8">
            &copy; 2024 SentimentAI. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}
