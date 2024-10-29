from flask import Flask, request, jsonify
from flask_cors import CORS
from sentiment_analysis import analyze_sentiment

app = Flask(__name__)
CORS(app)  # Permite solicitudes de diferentes orígenes

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.json
    text = data.get('text', '')
    analysis_result = analyze_sentiment(text)
    
    print(f"Received data: {data}")
    print(f"Analysis result: {analysis_result}")
    
    return jsonify(analysis_result)

if __name__ == '__main__':
    app.run(debug=True)