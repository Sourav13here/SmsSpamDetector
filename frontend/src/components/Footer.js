import React from 'react';
import { Shield, Zap } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <Shield className="footer-icon" />
                    <Zap className="footer-icon" />
                    <span className="footer-title">SMS Spam Detection Tool</span>
                </div>
                <div className="footer-text">
                    <p>&copy; 2025 SMS Spam Detection. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;