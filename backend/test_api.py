import requests

response = requests.post("http://127.0.0.1:5000/predict", json={"message": "Congratulations! You've won a free iPhone!"})
print(response.json())
