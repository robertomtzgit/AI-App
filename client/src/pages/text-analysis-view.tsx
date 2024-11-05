import React, { useState, useCallback, useRef } from 'react'
import { Upload, Cloud, BarChart2, PieChart, FileText } from 'lucide-react'

type AnalysisResult = {
  sentimentSummary: {
    total: number,
    positive: number,
    negative: number,
    positive_percentage: number,
    negative_percentage: number,
  },
  wordCloudUrl: string,
  sentimentChartUrl: string,
  sentimentCountsUrl: string
}

export default function TextAnalysisView(): JSX.Element {
  const [text, setText] = useState<string>('')
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      handleAnalyze(formData)
    }
  }

  const handleAnalyze = useCallback(async (data: FormData | { text: string }) => {
    setIsAnalyzing(true)
    setResult(null)

    try {
      const response = await fetch('http://127.0.0.1:5000/api/analyze', {
        method: 'POST',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers: data instanceof FormData ? {} : {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Error en el análisis')
      }

      const result = await response.json()
      setResult(result)
    } catch (error) {
      console.error('Error analyzing text:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim()) {
      handleAnalyze({ text })
    }
  }

  const handleReset = () => {
    setText('')
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-teal-600 flex flex-col p-4">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Sentiment Analysis</h1>
        <p className="text-center text-white mb-6">
          Enter your text or upload a .txt file to analyze sentiments. The results will include a sentiment summary, word cloud, and distribution charts.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 h-[28rem]">
            <h2 className="text-xl font-semibold mb-4">Analyze Your Text</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                placeholder="Enter your text here for sentiment analysis..."
                className="w-full h-64 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 focus:outline-none"
                >
                  <Upload className="mr-2 h-4 w-4" /> Upload .txt File
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button 
                  type="submit" 
                  className={`py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isAnalyzing || !text.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isAnalyzing || !text.trim()}
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Sentiment'}
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 h-[28rem]">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2" /> Analysis Results
            </h2>
            <div className="h-[22rem] overflow-y-auto">
              {isAnalyzing ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : result ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Sentiment Summary:</h3>
                    <p>Total text: {result.sentimentSummary.total}</p>
                    <p>Positive: {result.sentimentSummary.positive} ({result.sentimentSummary.positive_percentage}%)</p>
                    <p>Negative: {result.sentimentSummary.negative} ({result.sentimentSummary.negative_percentage}%)</p>
                  </div>
                </div>
              ) : (
                <div className="text-gray-500">No analysis performed yet.</div>
              )}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6 h-[28rem]">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Cloud className="mr-2" /> Word Cloud
            </h2>
            <div className="h-[22rem] flex items-center justify-center">
              {result ? (
                <img src={result.wordCloudUrl} alt="Word Cloud" className="max-w-full max-h-full object-contain" />
              ) : (
                <p className="text-gray-500">Word cloud will appear here after analysis</p>
              )}
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 h-[28rem]">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart2 className="mr-2" /> Sentiment Chart
            </h2>
            <div className="h-[22rem] flex items-center justify-center">
              {result ? (
                <img src={result.sentimentChartUrl} alt="Sentiment Chart" className="max-w-full max-h-full object-contain" />
              ) : (
                <p className="text-gray-500">Sentiment chart will appear here after analysis</p>
              )}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6 h-[28rem]">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <PieChart className="mr-2" /> Sentiment Distribution
            </h2>
            <div className="h-[22rem] flex items-center justify-center">
              {result ? (
                <img src={result.sentimentCountsUrl} alt="Sentiment Distribution" className="max-w-full max-h-full object-contain" />
              ) : (
                <p className="text-gray-500">Sentiment distribution will appear here after analysis</p>
              )}
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mt-8 flex flex-col justify-center items-center h-[20rem]">
            <h2 className="text-xl font-semibold mb-4 text-center">Want to Analyze Again?</h2>
            <button 
              onClick={handleReset} 
              className="py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Analyze Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
