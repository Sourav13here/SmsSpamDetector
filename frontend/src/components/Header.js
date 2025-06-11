import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
    return (
        <div className="header-section">
            <div className="header-content">
                <div className="header-title">
                    <Shield style={{ width: '4rem', height: '4rem', color: 'white' }} />
                    <h1>SMS Spam Detector</h1>
                </div>
                <p className="header-subtitle">
                    Protect yourself from unwanted messages
                </p>
            </div>
        </div>
    );
};

export default Header;