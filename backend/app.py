from flask import Flask, request, jsonify
from flask_cors import CORS
import nltk
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle
import pandas as pd
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Spam Detector API is running!"})

# Download stopwords for NLP
nltk.download('stopwords')

# Load SMS Spam Dataset from Kaggle
dataset_path = "C:/Users/SOURAV SHARMA/.kaggle/spam.csv"  # Update path if needed
if os.path.exists(dataset_path):
    df = pd.read_csv(dataset_path, encoding="ISO-8859-1")
else:
    print("Dataset file not found! Please check the path or download the dataset.")
    exit()
# Clean dataset (remove unnecessary columns)
df = df.iloc[:, [0, 1]]
df.columns = ["label", "message"]

# Convert labels (spam = 1, ham = 0)
df['label'] = df['label'].map({'spam': 1, 'ham': 0})

X = df['message']
y = df['label']

# Train a Naïve Bayes spam detection model
vectorizer = CountVectorizer(stop_words='english')
X_vectorized = vectorizer.fit_transform(X)

model = MultinomialNB()
model.fit(X_vectorized, y)

# Save the trained model
with open("spam_model.pkl", "wb") as f:
    pickle.dump((vectorizer, model), f)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    message = data["text"]

    # Load trained model
    with open("spam_model.pkl", "rb") as f:
        vectorizer, model = pickle.load(f)

    message_vectorized = vectorizer.transform([message])
    prediction = model.predict(message_vectorized)[0]

    return jsonify({"prediction": bool(prediction)})

# Run the Flask app
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=False)


