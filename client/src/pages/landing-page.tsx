import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
  const features = [
    { icon: "📊", title: "Accurate Sentiment Detection", description: "Powered by advanced AI, our tool detects nuanced emotions, ranging from positive, negative, and neutral sentiments to complex emotional undertones." },
    { icon: "⚡", title: "Easy-to-Use Interface", description: "Upload or paste your text, and receive real-time insights with a user-friendly design, built for both casual and professional use." },
    { icon: "📄", title: "Comprehensive Reports", description: "Get detailed analysis reports, including sentiment scores, emotional breakdowns, and keyword associations, so you can dive deep into your data." },
    { icon: "🔗", title: "Seamless Integration", description: "Perfect for developers and businesses, our tool offers API support for integrating sentiment analysis into your own apps and systems." }
  ]

  const steps = [
    { step: 1, title: "Sign Up", description: "Create your account to access our powerful sentiment analysis tools." },
    { step: 2, title: "Input Your Text", description: "Once logged in, enter the text you want to analyze in our secure dashboard." },
    { step: 3, title: "Get Instant Results", description: "Our AI processes your text in real-time and displays detailed results in seconds." }
  ]

  const useCases = [
    { title: "Customer Feedback Analysis", description: "Understand your customers' emotions from reviews, feedback, and surveys." },
    { title: "Social Media Insights", description: "Analyze social media posts, comments, and tweets to gauge audience sentiment." },
    { title: "Content Marketing", description: "Optimize content by analyzing reader emotions and responses to your articles or blogs." },
    { title: "Research and Academia", description: "Utilize sentiment analysis for data-driven insights in research papers and studies." }
  ]

  const testimonials = [
    { quote: "The most accurate sentiment analysis tool I've tried! It's now a key part of our customer feedback process.", name: "Jessica P., Customer Experience Manager" },
    { quote: "Quick, accurate, and easy to integrate. It's become essential for our social media monitoring.", name: "Mark L., Social Media Analyst" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">SentimentAI</Link>
          <div className="space-x-4">
            <Link to="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
            <Link to="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">How It Works</Link>
            <Link to="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Uncover the Emotions in Your Text with AI-Powered Sentiment Analysis</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">Discover the true sentiment behind any text with our state-of-the-art AI. Get real-time insights into emotions and intent in seconds.</p>
            <div className="space-x-4 animate-fade-in animation-delay-400">
              <Link to="/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Start Analyzing Now
              </Link>
              <Link to="#how-it-works" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                Learn How It Works
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Sentiment Analysis Tool?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ideal For Various Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p>{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SentimentAI</h3>
              <p>Uncover emotions in text with AI-powered sentiment analysis.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="#features" className="hover:underline">Features</Link></li>
                <li><Link to="#how-it-works" className="hover:underline">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>support@sentimentai.com</p>
              <div className="flex space-x-4 mt-4">
                <Link to="#" aria-label="LinkedIn" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link to="#" aria-label="Twitter" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link to="#" aria-label="Facebook" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} SentimentAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage;