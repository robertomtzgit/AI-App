# 📊 Sentiment Analysis App - AI Powered Insight 🌟

Welcome to **Sentiment Analysis App**, a powerful, AI-driven application that lets you explore the emotions and key insights within texts. Discover the sentiment of tweets, social media posts, and other text files while visualizing the data with beautiful, interactive graphics. Perfect for researchers, social media analysts, and anyone curious about text analytics!



## 🎯 Key Features

- 🌐 **Analyze Sentiment** – Quickly determine if the tone of text is positive, negative, or neutral.
- 🔑 **Extract Key Topics** – Dive into the main themes of any text.
- 🎨 **Visualize with Word Clouds and Graphs** – Interactive graphics make analysis visually engaging and easy to interpret.
- 🔒 **User Authentication** – Securely access and personalize your experience.
- 📄 **File Upload Support** – Analyze `.txt` files directly by uploading them.
- 🚀 **Instant Analysis Results** – Get real-time feedback right below your input box.



## 💻 Demo

> **Try it out live** on [Render 🌍](https://ai-app-frontend-w9wa.onrender.com/)



## 🛠️ Tech Stack

| Frontend               | Backend             | Deployment              |
|------------------------|---------------------|--------------------------|
| ReactJS (TypeScript)   | Python Flask       | Render (Frontend & Backend) |
| Firebase Authentication | Pandas, TextBlob  | Firebase, GitHub        |



## 🚀 Getting Started

To set up this app locally, follow these steps. Make sure you have **Python 3.10** and **Node.js** installed.

### **1. Clone the Repository**
```bash
git clone https://github.com/robertomtzgit/AI-App.git
cd AI-App
```

### **2. Install the dependencies**
```bash
cd server
pip install -r requirements.txt
```

### **3. Install Frontend Dependencies**

Switch to the client folder and install dependencies:

```bash
cd ../client
npm install
```

### **4. Add Environment Variables**

Create a .env file in both client and server folders with your Firebase and backend configurations.

```bash
cd ../client
npm install
```



## 🌐 How to Run

### Backend
To start the Flask API, navigate to the server folder and run:

```bash
python app.py
```

### Frontend
To start the React app, navigate to the client folder and run:

```bash
npm start
```
Your app should now be running locally at http://localhost:3000 🚀



## 🎨 Features Breakdown

### 📝 Sentiment Analysis
*Analyze the mood of the text in seconds!*
- **Real-time Sentiment Score**: Instantly determine if the text's sentiment is Positive, Neutral, or Negative.
- **Emotion Labels**: Identify emotional tones with tags like *Joy*, *Sadness*, or *Anger*, providing an intuitive read on the text's sentiment.

### 🗝️ Topic & Keyword Extraction
*Discover the main themes and keywords with ease.*
- **Keywords**: Identify high-frequency words and phrases that reveal the focus of the text.
- **Themes**: Extract prominent topics to understand the overall context and subjects within the text.

### 📊 Data Visualization
*Visual feedback for a more comprehensive understanding.*
- **Word Cloud**: A colorful, engaging display of the most frequent words to highlight key terms.
- **Graphs**: Sentiment breakdown and topic distribution graphs, providing visual insights into the text’s underlying emotions and main topics.

### 🔐 User Authentication
*Secure and personalized access for every user.*
- **Firebase Login**: A secure, quick login system powered by Firebase.
- **Session Management**: Ensure that only logged-in users can access the analysis tools, keeping data secure.



### 🖼️ Screenshot Gallery

<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">

  <div style="text-align: center; margin: 10px;">
    <h4>🌐 Landing Page</h4>
    <img src="https://github.com/user-attachments/assets/f276c460-2809-4857-87e9-39bbc72eac6c" alt="Landing Page" />
  </div>

  <div style="text-align: center; margin: 10px;">
    <h4>📝 Register Page</h4>
    <img src="https://github.com/user-attachments/assets/4babf5da-b046-4f9c-8cab-fb04e0e33c48" alt="Register Page" />
  </div>

  <div style="text-align: center; margin: 10px;">
    <h4>🔑 Login Page</h4>
    <img src="https://github.com/user-attachments/assets/4135a21a-906b-4815-b3c2-7c5abb2e6afa" alt="Login Page" />
  </div>

  <div style="text-align: center; margin: 10px;">
    <h4>📊 Text Analysis Page</h4>
    <img src="https://github.com/user-attachments/assets/cbafa2d8-4f29-4943-9d53-ddf543baa94c" alt="Text Analysis Page" />
  </div>

  <div style="text-align: center; margin: 10px;">
    <h4>📈 Results Page</h4>
    <img src="https://github.com/user-attachments/assets/f28eb182-18ef-4f48-bad4-c5d103bb86a9" alt="Results Page" />
  </div>

  <div style="text-align: center; margin: 10px;">
    <h4>🔄 Password Recovery Page</h4>
    <img src="https://github.com/user-attachments/assets/1334fe52-c610-4094-9f3e-235667051a42" alt="Password Recovery Page" />
  </div>

</div>



## 📈 Future Enhancements
Our roadmap includes exciting features to make the app even more insightful and user-friendly:
1. **Add Social Media API Support** – Access data from platforms like Twitter or Reddit for direct analysis.
2. **Advanced Analytics** – Include an emotional breakdown and trending analysis for more granular insights.
3. **Customizable Visualizations** – Allow users to tailor the look and feel of data visualizations to their preferences.



## 🙏 Contributions

We welcome all contributions! Here’s how to contribute to make the app even better:

1. **Fork the repo** on GitHub.
2. **Create a new branch** with a descriptive name.
3. **Submit a pull request** – We’ll review it as soon as possible!

> Please read our [Contributing Guidelines](link-to-guidelines) before you start to ensure a smooth collaboration process.✨



## 📝 License

This project is licensed under the **MIT License**. For more details, please check out the [LICENSE](link-to-license-file) file in the repository.




