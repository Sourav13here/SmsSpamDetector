// Alternative version using fetch instead of axios
const API_URL = 'http://127.0.0.1:5000'; // Your Flask backend

const predictSpam = async (message) => {
    try {
        const response = await fetch(`${API_URL}/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error predicting spam:", error);
        return { error: "Backend connection failed", prediction: false };
    }
};

// Default export
export default predictSpam;