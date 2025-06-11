# 📢 SMS Spam Detector 
> A web-based spam detection system built with **React**, **Flask**, and **scikit-learn**, capable of classifying SMS messages as spam or not spam in real-time.

## 🧠 Project Overview

This project was developed as part of our academic internship, where our goal was to build a reliable machine learning model to distinguish between **spam** and **ham (non-spam)** SMS messages using Natural Language Processing (NLP) techniques.

We used Python’s machine learning ecosystem to train, evaluate, and deploy a lightweight spam classifier accessible via a modern web interface.

---

## 👥 Team Members

- **Faruk Khan**
- **Mridul Roy**
- **Mriganka Jyoti Deka**
- **Sanjeev Iqbal Ahmed**
- **Sourav Sharma**

---

## 🚀 Features

### ✉️ For Users
- 📊 **Instant SMS Analysis** – Get real-time spam detection results  
- 🔍 **Spam Classification** – Classifies messages as **Spam ❌** or **Not Spam ✅**  
- ⚡ **Fast & Lightweight** – Efficient predictions through pre-trained model  
- 🌎 **Online Access** – Hosted using [Render](https://render.com) for seamless usage  

---

## 🛠️ Tech Stack

| Technology         | Purpose               | Version    |
|--------------------|-----------------------|------------|
| React ⚛️           | Frontend UI           | 18.2.0+    |
| Flask 🐍           | Backend API           | 2.3.2+     |
| scikit-learn 📊    | ML Model Training     | 1.3.0+     |
| Pandas 📘          | Data Handling         | Latest     |
| NumPy 🔢           | Numerical Operations  | Latest     |
| Axios 🔗           | API Integration       | Latest     |
| Gunicorn 🚀        | Production WSGI       | Latest     |
| Tailwind CSS 🎨    | UI Styling            | 3.3.0+     |

---

## 📥 Dataset & Model Info

- 📂 **Dataset**: [SMS Spam Collection Dataset](https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset)  
- 🧠 **ML Techniques**:
  - Feature Extraction: `TF-IDF Vectorizer`
  - Algorithms: `Multinomial Naïve Bayes`, `Logistic Regression`
  - Final Model: `MultinomialNB` with `TF-IDF`
- ✅ **Evaluation Accuracy**: `97.6%` on test dataset
- 📈 Evaluation Metrics Used: Accuracy, Precision, Recall, F1-score

---

## 🌍 Live Deployment

🔗 **Try it live**: [https://sms-spam-detector-b15e.onrender.com](https://sms-spam-detector-b15e.onrender.com)

---


## 🛡 Future Enhancements

- 📊 Add confidence score for predictions  
- 🌍 Multi-language spam detection  
- 📈 Improve dataset with real-world examples  
- 📥 Add email spam detection model



