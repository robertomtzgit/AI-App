from textblob import TextBlob
from langdetect import detect, LangDetectException
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from io import BytesIO
import base64

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

        emotions = {
            'joy': max(0, polarity),
            'sadness': max(0, -polarity) if polarity < 0 else 0,
            'anger': 0,
            'fear': 0,
            'surprise': 0
        }

        text_lower = text.lower()
        topics = []
        topic_keywords = {
            'Politics': ['politics', 'government', 'election'],
            'Sports': ['sports', 'game', 'soccer'],
            'Technology': ['technology', 'computer', 'AI', 'software'],
            # Puedes agregar más temas según sea necesario
        }

        for topic, keywords in topic_keywords.items():
            if any(word in text_lower for word in keywords):
                topics.append(topic)

        # Generar imagen de nube de palabras
        wordcloud = WordCloud(width=400, height=200, background_color='white').generate(text)
        image_stream = BytesIO()
        wordcloud.to_image().save(image_stream, format='PNG')
        image_stream.seek(0)
        wordcloud_base64 = base64.b64encode(image_stream.read()).decode()

        return {
            'sentiment': sentiment_label,
            'polarity': polarity,
            'subjectivity': subjectivity,
            'language': language,
            'topics': topics,
            'emotions': emotions,
            'wordcloud': wordcloud_base64
        }
    except Exception as e:
        return {
            'error': str(e),
            'language': language,
            'sentiment': 'no detectado',
            'polarity': 0,
            'subjectivity': 0,
            'topics': [],
            'emotions': {'joy': 0, 'sadness': 0, 'anger': 0, 'fear': 0, 'surprise': 0},
            'wordcloud': ''
        }
