import React, { useState } from 'react';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';
import predictSpam from './utils/spamPredictor'; // Default import
import './styles.css'; // Single CSS file import

function App() {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!message.trim()) {
            alert("Please enter a message!");
            return;
        }
        
        setLoading(true);
        try {
            const response = await predictSpam(message);
            console.log('Prediction response:', response); // Debug log
            setResult(response);
        } catch (error) {
            console.error("Error fetching spam prediction:", error);
            setResult({ error: "Backend connection failed", prediction: false });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app-container">
            <Header />
            <div className="main-container">
                <MessageInput 
                    message={message}
                    setMessage={setMessage}
                    onSubmit={handleSubmit}
                    loading={loading}
                />
                {result && <ResultDisplay result={result} />}
            </div>
            <Footer />
        </div>
    );
}

export default App;