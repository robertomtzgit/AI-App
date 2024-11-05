import re
from textblob import TextBlob
import pandas as pd
import matplotlib
matplotlib.use('Agg')  # Use 'Agg' backend which doesn't require a GUI
import matplotlib.pyplot as plt
from wordcloud import WordCloud
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import io
import base64

# Configure the Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Directory configuration for saving images
if not os.path.exists('static'):
    os.makedirs('static')

# Functions to clean and analyze text (unchanged)
def clean_text(text):
    text = re.sub(r'@[A-Za-z0-9]+', '', text)  # Remove mentions
    text = re.sub(r'#', '', text)              # Remove hashtags
    text = re.sub(r'RT[\s]+', '', text)        # Remove retweets
    text = re.sub(r'https?:\/\/\S+', '', text) # Remove URLs
    return text

def get_subjectivity(text):
    return TextBlob(text).sentiment.subjectivity

def get_polarity(text):
    return TextBlob(text).sentiment.polarity

def analysis(score):
    if score < 0:
        return 'Negative'
    elif score == 0:
        return 'Neutral'
    else:
        return 'Positive'

# Functions for visualization and image saving
def generate_wordcloud(df):
    all_words = ' '.join([tweet for tweet in df['Tweet']])
    wordcloud = WordCloud(width=500, height=300, random_state=21, max_font_size=119).generate(all_words)
    
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    
    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png')
    img_buffer.seek(0)
    img_str = base64.b64encode(img_buffer.getvalue()).decode()
    plt.close()
    
    return f"data:image/png;base64,{img_str}"

def plot_sentiment_analysis(df):
    plt.figure(figsize=(10, 5))
    
    # Scatter plot for polarity and subjectivity
    plt.scatter(df['Polarity'], df['Subjectivity'], color='blue')
    plt.title('Sentiment Analysis')
    plt.xlabel('Polarity')
    plt.ylabel('Subjectivity')
    
    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png')
    img_buffer.seek(0)
    img_str = base64.b64encode(img_buffer.getvalue()).decode()
    plt.close()
    
    return f"data:image/png;base64,{img_str}"

def plot_sentiment_counts(df):
    sentiment_counts = df['Analysis'].value_counts()
    
    plt.figure(figsize=(8, 6))
    sentiment_counts.plot(kind='bar', color=['green', 'red', 'blue'])
    plt.gca().tick_params(axis='x', colors='black')
    plt.gca().tick_params(axis='y', colors='black')
    plt.title('Sentiment Analysis', fontsize=16, fontweight='bold', color='black')
    plt.ylabel('Count', fontsize=10)
    plt.xlabel('Sentiment', fontsize=10)
    plt.xticks(rotation=45)
    
    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png')
    img_buffer.seek(0)
    img_str = base64.b64encode(img_buffer.getvalue()).decode()
    plt.close()
    
    return f"data:image/png;base64,{img_str}"

# API route for sentiment analysis
@app.route('/api/analyze', methods=['POST'])
def analyze():
    # Read the uploaded text file or analyze text from the request
    if 'file' in request.files:
        file = request.files['file']
        tweet_texts = file.read().decode('utf-8').splitlines()
    else:
        data = request.get_json()
        tweet_texts = data['text'].split('\n')

    # Create DataFrame and perform cleaning
    df = pd.DataFrame(tweet_texts, columns=['Tweet'])
    df['Text'] = df['Tweet'].apply(clean_text)
    df['Subjectivity'] = df['Tweet'].apply(get_subjectivity)
    df['Polarity'] = df['Tweet'].apply(get_polarity)
    df['Analysis'] = df['Polarity'].apply(analysis)

    # Generate images
    wordcloud_url = generate_wordcloud(df)
    sentiment_url = plot_sentiment_analysis(df)
    sentiment_counts_url = plot_sentiment_counts(df)

    # Analysis summary
    total_tweets = df.shape[0]
    positive_tweets = df[df['Analysis'] == 'Positive'].shape[0]
    negative_tweets = df[df['Analysis'] == 'Negative'].shape[0]
    
    # Sentiment results
    sentiment_summary = {
        "total": total_tweets,
        "positive": positive_tweets,
        "negative": negative_tweets,
        "positive_percentage": round(positive_tweets / total_tweets * 100, 1),
        "negative_percentage": round(negative_tweets / total_tweets * 100, 1),
    }

    return jsonify({
        'sentimentSummary': sentiment_summary,
        'wordCloudUrl': wordcloud_url,
        'sentimentChartUrl': sentiment_url,
        'sentimentCountsUrl': sentiment_counts_url
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
