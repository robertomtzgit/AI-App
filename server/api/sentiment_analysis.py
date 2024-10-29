from textblob import TextBlob
from langdetect import detect, LangDetectException

def analyze_sentiment(text):
    try:
        language = detect(text)
    except LangDetectException:
        language = 'unknown'

    try:
        analysis = TextBlob(text)
        if language != 'en':
            analysis = analysis.translate(to='en')
        
        polarity = analysis.sentiment.polarity
        subjectivity = analysis.sentiment.subjectivity

        # Clasificación de intensidad del sentimiento
        if polarity > 0.5:
            sentiment_label = 'Very positive'
        elif polarity > 0:
            sentiment_label = 'Positive'
        elif polarity == 0:
            sentiment_label = 'Neutral'
        elif polarity < -0.5:
            sentiment_label = 'Very negative'
        else:
            sentiment_label = 'Negative'

        # Cálculo de emociones
        emotions = {
            'joy': max(0, polarity),
            'sadness': max(0, -polarity) if polarity < 0 else 0,
            'anger': 0,
            'fear': 0,
            'surprise': 0
        }

        # Temas y palabras clave
        text_lower = text.lower()
        topics = []
        topic_keywords = {
            'Politics': ['politics', 'government', 'election'],
            'Sports': ['sports', 'game', 'soccer'],
            'Technology': ['technology', 'computer', 'AI', 'software'],
            'Finance': ['finance', 'money', 'bank', 'economy'],
            'Health': ['health', 'wellness', 'medical', 'disease'],
            'Education': ['education', 'school', 'learning', 'university'],
            'Entertainment': ['entertainment', 'movie', 'film', 'music'],
            'Science': ['science', 'research', 'scientific'],
            'Travel': ['travel', 'tourism', 'vacation'],
            'Weather': ['weather', 'climate', 'rain', 'temperature'],
            'Economy': ['economy', 'economic', 'market'],
            'Fashion': ['fashion', 'clothes', 'style'],
            'Environment': ['environment', 'ecology', 'sustainable', 'nature'],
            'Love': ['love', 'relationship', 'romance'],
            'Food': ['food', 'cooking', 'restaurant']
        }

        for topic, keywords in topic_keywords.items():
            if any(word in text_lower for word in keywords):
                topics.append(topic)

        return {
            'sentiment': sentiment_label,
            'polarity': polarity,
            'subjectivity': subjectivity,
            'language': language,
            'topics': topics,
            'emotions': emotions,
        }
    except Exception as e:
        return {
            'error': str(e),
            'language': language,
            'sentiment': 'no detectado',
            'polarity': 0,
            'subjectivity': 0,
            'topics': [],
            'emotions': { 'joy': 0, 'sadness': 0, 'anger': 0, 'fear': 0, 'surprise': 0 },
        }
