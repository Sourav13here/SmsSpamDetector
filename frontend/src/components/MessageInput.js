import React from 'react';
import { MessageCircle, Search, Zap } from 'lucide-react';

const MessageInput = ({ message, setMessage, onSubmit, loading }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !loading) {
            onSubmit();
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-content">
                    <div className="card-icon">
                        <MessageCircle style={{ width: '2rem', height: '2rem', color: 'white' }} />
                    </div>
                    <div>
                        <h2 className="card-title">Message Analysis</h2>
                        <p className="card-subtitle">Enter your message below for spam detection</p>
                    </div>
                </div>
            </div>

            <div className="input-section">
                <label className="input-label">Message Content</label>
                <div className="input-container">
                    <input 
                        type="text" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Enter your message here..."
                        className="message-input"
                        onKeyPress={handleKeyPress}
                    />
                    <MessageCircle className="input-icon" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                
                <button 
                    onClick={onSubmit}
                    disabled={loading}
                    className="submit-button"
                >
                    {loading ? (
                        <>
                            <div className="spinner"></div>
                            <span>Analyzing...</span>
                        </>
                    ) : (
                        <>
                            <Search style={{ width: '1.5rem', height: '1.5rem' }} />
                            <span>Check Spam</span>
                            <Zap style={{ width: '1.5rem', height: '1.5rem' }} />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default MessageInput;