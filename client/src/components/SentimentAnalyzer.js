import React, { useState } from 'react';
import '../styles/SentimentAnalyzer.css';


export default function SentimentAnalyzer() {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const analyzeSentiment = async () => {
        setLoading(true);
        setError('');
        try {
        const response = await fetch("http://127.0.0.1:5000/api/analyze", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResult(data);
        } catch (e) {
        console.error("Error al analizar el sentimiento:", e);
        setError('Hubo un error al analizar el sentimiento. Por favor, intenta de nuevo.');
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Análisis de Sentimientos</h1>
                <textarea
                    placeholder="Escribe tu texto aquí..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="textarea"
                    rows={4}
                />
                <button
                    onClick={analyzeSentiment}
                    disabled={loading}
                    className={`button ${loading ? 'disabledButton' : ''}`}
                >
                    {loading ? 'Analizando...' : 'Analizar'}
                </button>
                
                {error && (
                    <div className="error">
                        <strong>Error:</strong> {error}
                    </div>
                )}

                {result && (
                    <div className="result">
                        <p><strong>Sentimiento:</strong> {result.sentiment}</p>
                        <p><strong>Polaridad:</strong> {result.polarity?.toFixed(2) ?? 'No disponible'}</p>
                        <p><strong>Subjetividad:</strong> {result.subjectivity?.toFixed(2) ?? 'No disponible'}</p>
                        <p><strong>Idioma detectado:</strong> {result.language || 'No detectado'}</p>
                        <div>
                            <strong>Temas:</strong>
                            {result.topics && result.topics.length > 0 ? (
                                result.topics.map((topic, index) => (
                                    <span key={index} className="badge">
                                        {topic}
                                    </span>
                                ))
                            ) : (
                                <span>No se detectaron temas específicos</span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}