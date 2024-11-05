import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('A password reset email has been sent.');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-teal-600">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reset Password</h2>
        {message && <div className="mb-4 text-green-600 text-center">{message}</div>}
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              message ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!!message}
          >
            {message ? (
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
              'Send Password Reset Email'
            )}
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-500">
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Back to Login
          </Link>
        </div>
        <footer className="text-center text-xs text-gray-400 mt-8">
          &copy; 2024 SentimentAI. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
