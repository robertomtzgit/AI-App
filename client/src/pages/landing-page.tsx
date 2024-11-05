import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const features = [
    { icon: "📊", title: "Accurate Sentiment Detection", description: "Powered by advanced AI, our tool detects nuanced emotions, ranging from positive, negative, and neutral sentiments to complex emotional undertones." },
    { icon: "⚡", title: "Easy-to-Use Interface", description: "Upload or paste your text, and receive real-time insights with a user-friendly design, built for both casual and professional use." },
    { icon: "📄", title: "Comprehensive Reports", description: "Get detailed analysis reports, including sentiment scores, emotional breakdowns, and keyword associations, so you can dive deep into your data." },
    { icon: "🔗", title: "Seamless Integration", description: "Perfect for developers and businesses, our tool offers API support for integrating sentiment analysis into your own apps and systems." }
  ];

  const steps = [
    { step: 1, title: "Sign Up", description: "Create your account to access our powerful sentiment analysis tools." },
    { step: 2, title: "Input Your Text", description: "Once logged in, enter the text you want to analyze in our secure dashboard." },
    { step: 3, title: "Get Instant Results", description: "Our AI processes your text in real-time and displays detailed results in seconds." }
  ];

  const useCases = [
    { title: "Customer Feedback Analysis", description: "Understand your customers' emotions from reviews, feedback, and surveys." },
    { title: "Social Media Insights", description: "Analyze social media posts, comments, and tweets to gauge audience sentiment." },
    { title: "Content Marketing", description: "Optimize content by analyzing reader emotions and responses to your articles or blogs." },
    { title: "Research and Academia", description: "Utilize sentiment analysis for data-driven insights in research papers and studies." }
  ];

  const testimonials = [
    { quote: "The most accurate sentiment analysis tool I've tried! It's now a key part of our customer feedback process.", name: "Jessica P., Customer Experience Manager" },
    { quote: "Quick, accurate, and easy to integrate. It's become essential for our social media monitoring.", name: "Mark L., Social Media Analyst" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-teal-600 flex flex-col">
      <main className="flex-grow">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg p-10 shadow-lg">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in text-white">Uncover the Emotions in Your Text with AI-Powered Sentiment Analysis</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200 text-white">Discover the true sentiment behind any text with our state-of-the-art AI. Get real-time insights into emotions and intent in seconds.</p>
            <div className="space-x-4 animate-fade-in animation-delay-400">
              <Link to="/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Start Analyzing Now
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Our Sentiment Analysis Tool?</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-white">{step.description}</p>
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Ideal For Various Use Cases</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Users Say</h2>
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
    </div>
  );
}

export default LandingPage;
