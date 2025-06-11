# 📢 SMS Spam Detector – Message Filtering System
> A web-based spam detection tool built with **React**, **Flask**, and **scikit-learn** to classify SMS messages as spam or not spam.

## 🚀 Features

### ✉️ For Users
- 📊 **Instant SMS Analysis** – Enter a message and get an immediate spam detection result  
- 🔍 **Spam Classification** – Uses a trained machine learning model to classify messages as **Spam ❌** or **Not Spam ✅**  
- ⚡ **Fast & Lightweight** – Optimized for quick predictions  
- 🌎 **Online Accessibility** – Hosted on Render for seamless access  

## 🛠️ Tech Stack

| Technology      | Purpose            | Version    |
|-----------------|--------------------|------------|
| React ⚛️        | Frontend UI        | 18.2.0+    |
| Flask 🐍        | Backend API        | 2.3.2+     |
| scikit-learn 📊 | ML Model Training  | 1.3.0+     |
| Axios 🔗        | API Integration    | Latest     |
| Gunicorn 🚀     | Production Server  | Latest     |
|  CSS 🎨         | UI Styling         | 3.3.0+     |

## 📂 Project Structure

SmsSpamDetector/
├── frontend/ # React-based UI
│ ├── src/ # Source files
│ │ ├── components/ # UI components (Header, Footer, MessageInput, etc.)
│ │ ├── styles/ # CSS styles (Tailwind)
│ │ ├── utils/ # Helper functions (spam detection API calls)
│ │ ├── App.js # Main UI logic
│ │ ├── index.js # React entry point
│ └── package.json # Dependencies and scripts
├── backend/ # Flask-based API
│ ├── app.py # Flask app entry point
│ ├── model.py # Spam detection logic
│ ├── requirements.txt # Python dependencies
│ ├── Dockerfile # Deployment configuration
│ ├── static/ # Frontend assets
│ └── templates/ # HTML templates (if needed)
├── render.yml # Render deployment config
├── README.md # Project documentation
└── .gitignore # Files to exclude from Git tracking


## 🌍 Live Deployment : https://sms-spam-detector-b15e.onrender.com

## 📥 Dataset & Model Info

- Dataset used: [SMS Spam Collection Dataset](https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset)
- Source: UCI Machine Learning Repository (via Kaggle)
- Model: Trained using `scikit-learn`'s `CountVectorizer` + `MultinomialNB`
- 🧪 **Testing Accuracy**: **98%**


##📱Screenshots




##👨‍💻 Developers

-**Faruk Khan**
-**Mridul Roy**
-**Mriganka Jyoti Deka**
-**Sanjeev Iqbal Ahmed**
-**Sourav Sharma**



