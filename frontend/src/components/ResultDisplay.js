import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const ResultDisplay = ({ result }) => {
    const isSpam = result.prediction;

    return (
        <div className="card result-card">
            <div className={`card-header ${isSpam ? 'result-header-spam' : 'result-header-safe'}`}>
                <div className="card-header-content">
                    <div className={`card-icon ${isSpam ? 'result-icon-spam' : 'result-icon-safe'}`}>
                        {isSpam ? (
                            <AlertTriangle style={{ width: '2rem', height: '2rem', color: 'white' }} />
                        ) : (
                            <CheckCircle style={{ width: '2rem', height: '2rem', color: 'white' }} />
                        )}
                    </div>
                    <div>
                        <h3 className="card-title">Analysis Complete</h3>
                        <p className="card-subtitle">Spam detection results</p>
                    </div>
                </div>
            </div>

            <div className="result-content">
                <div className={`result-main-icon ${isSpam ? 'result-main-icon-spam' : 'result-main-icon-safe'}`}>
                    {isSpam ? (
                        <AlertTriangle style={{ width: '3rem', height: '3rem', color: '#f44336' }} />
                    ) : (
                        <CheckCircle style={{ width: '3rem', height: '3rem', color: '#4caf50' }} />
                    )}
                </div>
                
                <p className="result-label">
                    <strong>Result:</strong>
                </p>
                
                <div className={`result-badge ${isSpam ? 'result-badge-spam' : 'result-badge-safe'}`}>
                    {isSpam ? "🚨 Spam" : "✅ Not Spam"}
                </div>
            </div>
        </div>
    );
};

export default ResultDisplay;