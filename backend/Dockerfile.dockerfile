# Use an official Python image
FROM python:3.10

# Set working directory inside the container
WORKDIR /app

# Copy project files into the container
COPY . .

# Install dependencies from requirements.txt
RUN pip install -r requirements.txt

# Expose the Flask port
EXPOSE 5000

# Run the Flask app using Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
