import React, { useState } from 'react';
// Assuming your navigation links are rendered here
// You might also need to import your icons if using a React icon library

const Header = () => {
    // State for toggling the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="container">
                <nav role="navigation">
                    <a href="#hero" className="logo">Chai D’lish</a>
                    <button 
                        className="hamburger" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        aria-label="Toggle navigation menu" 
                        aria-expanded={isMenuOpen}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#hero">Home</a>
                        <a href="#about">About</a>
                        {/* ✅ MODIFICATION HERE:
                          1. Changed href from #menu to menu.pdf
                          2. Added target="_blank" to open in a new tab
                        */}
                        <a href="menu.pdf" target="_blank">Menu</a>
                        
                        <a href="#gallery">Gallery</a>
                        <a href="#contact">Contact</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;