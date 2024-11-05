import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAuth } from '../contexts/AuthContext'; // Importar useAuth

type AnalysisResult = {
  overallSentiment: string,
  sentimentScore: number,
  emotions: {
    joy: number,
    sadness: number,
    anger: number,
    fear: number,
    surprise: number
  },
  keywords: string[],
  language: string
}

export default function TextAnalysisView() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Obtener el usuario actual

  const handleAnalyze = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setResult(null);

    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });
  
      if (!response.ok) {
        throw new Error('Error en el análisis');
      }

      const data = await response.json();
      console.log("Received data from backend:", data);
      setResult({
        overallSentiment: data.sentiment,
        sentimentScore: data.polarity,
        emotions: {
          joy: data.subjectivity > 0.5 ? data.subjectivity : 0,
          sadness: data.subjectivity < -0.5 ? -data.subjectivity : 0,
          anger: 0,
          fear: 0,
          surprise: 0
        },
        keywords: data.topics,
        language: data.language
      });
    } catch (error) {
      console.error('Error analyzing text:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, [text]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirigir al inicio de sesión después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">SentimentAI</Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/dashboard" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/history" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Analysis History
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="relative">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  User Menu
                </button>
                <button
                  onClick={handleLogout}
                  className="ml-4 px-3 py-2 bg-red-500 text-white rounded-md"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Sentiment Analysis</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Analyze Your Text</h2>
            <form onSubmit={handleAnalyze} className="space-y-4">
              <textarea 
                placeholder="Enter your text here for sentiment analysis..." 
                className="w-full h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button 
                type="submit" 
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isAnalyzing || !text.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isAnalyzing || !text.trim()}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Sentiment'}
              </button>
            </form>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            {isAnalyzing ? (
              <div className="flex justify-center items-center h-64">
                <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            ) : result ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Overall Sentiment:</span>
                  <span className="flex items-center">
                    {result.overallSentiment === 'Very positive' ? (
                      <svg className="h-5 w-5 text-green-700 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"></path>
                      </svg>
                    ) : result.overallSentiment === 'Positive' ? (
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"></path>
                      </svg>
                    ) : result.overallSentiment === 'Very negative' ? (
                      <svg className="h-5 w-5 text-red-700 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"></path>
                      </svg>
                    ) : result.overallSentiment === 'Negative' ? (
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"></path>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-yellow-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8c.828 0 1.5.672 1.5 1.5S12.828 11 12 11s-1.5-.672-1.5-1.5S11.172 8 12 8zm0 2c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-3 4h6v6H9v-6z"></path>
                      </svg>
                    )}
                    {result.overallSentiment}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Sentiment Score:</span> {result.sentimentScore.toFixed(2)}
                </div>
                <div>
                  <span className="font-semibold">Emotions:</span>
                  <ul className="list-disc list-inside pl-4">
                    {Object.entries(result.emotions).map(([emotion, score]) => (
                      <li key={emotion}>{emotion}: {(score as number).toFixed(2)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Keywords:</span> {result.keywords.join(', ')}
                </div>
                <div>
                  <span className="font-semibold">Detected Language:</span> {result.language}
                </div>
              </div>
            ) : (
              <div className="text-gray-500">No analysis performed yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
