# AI-App

## Overview

AI-App is a sentiment analysis application that utilizes Flask as the backend and React as the frontend. It analyzes texts and provides sentiment results, allowing users to gain insights into various texts, including tweets and articles.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Report](#report)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Sentiment analysis of texts in multiple languages (English, Spanish, Portuguese, Italian, French).
- User-friendly interface with responsive design.
- Detailed feedback on sentiment polarity (positive, negative, neutral).
- Support for various text inputs, including tweets and long articles.

## Getting Started

To set up the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for frontend)
- [Python](https://www.python.org/downloads/) (for backend)
- [pip](https://pip.pypa.io/en/stable/) (Python package manager)

### Clone the Repository

```bash
git clone https://github.com/robertomtzgit/AI-App.git
cd AI-App
```
### Frontend Setup

Navigate to the client directory.
```bash
cd client
```

Install the dependencies.

```bash
npm install
```

Start the development server.

```bash
npm start
```

### Backend Setup

Navigate to the server directory.

```bash
cd ../server
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate the virtual environment:

On Windows:

```bash
venv\Scripts\activate
```

On macOS/Linux:

```bash
source venv/bin/activate
```

Install the dependencies.

```bash
pip install -r requirements.txt
```

Run the backend server.

```bash
flask run
```

### Deployment

The project is deployed on Raender. To access the live application, visit:
https://ai-app-front-uhni.onrender.com

### Report
A detailed report of the project, including methodology, analysis, and results, is available in the report directory of the repository. You can find it here.

### Technologies Used

Frontend: React

Backend: Flask

Sentiment Analysis: TextBlob

Deployment: React


### Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes you would like to propose.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### App Landingpage

![image](https://github.com/user-attachments/assets/2c98e7aa-721f-48fd-9f11-ce243625481c)

### App Analysis View

![image](https://github.com/user-attachments/assets/e40b049a-e6bb-4e93-a151-93a83d142a48)


