from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import pickle

# ----------------------------
# Setup Flask App
# ----------------------------

# Path to React build folder (will be copied during build)
build_folder = os.path.join(os.path.dirname(__file__), 'build')
app = Flask(__name__, static_folder=build_folder, static_url_path='')
CORS(app)

# ----------------------------
# Load Trained Model
# ----------------------------

MODEL_PATH = os.path.join(os.path.dirname(__file__), "spam_model.pkl")

if os.path.exists(MODEL_PATH):
    with open(MODEL_PATH, "rb") as f:
        vectorizer, model = pickle.load(f)
else:
    raise FileNotFoundError("Trained model 'spam_model.pkl' not found.")

# ----------------------------
# API Endpoints
# ----------------------------

@app.route("/api")
def api_status():
    return jsonify({"message": "Spam Detector API is running!"})

@app.route("/api/predict", methods=["POST"])
def predict():
    data = request.get_json()
    message = data.get("text", "")

    if not message:
        return jsonify({"error": "No message provided"}), 400

    message_vectorized = vectorizer.transform([message])
    prediction = model.predict(message_vectorized)[0]

    return jsonify({"prediction": bool(prediction)})

# ----------------------------
# Frontend Routes
# ----------------------------

@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def serve_static(path):
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        # Fallback to index.html for React Router
        return send_from_directory(app.static_folder, "index.html")

# ----------------------------
# Run Flask App
# ----------------------------

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port, debug=False)