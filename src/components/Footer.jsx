import React from 'react';
// 👈 IMPORTS
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h3>Chai D’lish — Indian Resto Café</h3>
                <p>A Slice of South India in Every Bite</p>
                <div className="social-links">
                    {/* 👈 REPLACEMENTS */}
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaWhatsapp /></a>
                </div>
                <p style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.7 }}>
                    &copy; 2025 Chai D’lish • Minehead, UK
                </p>
            </div>
        </footer>
    );
};

export default Footer;