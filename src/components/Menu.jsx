// src/components/Menu.jsx
import React, { useState, useEffect } from 'react';
import { FaPlus, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
// Note: Assuming these imports exist in your project structure
import {
    starters,
    breakfastDosa,
    thaliBiriyani,
    mains,
    hotDrinks,
    juicesMojitos,
    desserts,
    sides
} from '../data';

import first from '../assets/1.jpeg';
import second from '../assets/2.jpeg';
import third from '../assets/3.jpeg';
import fourth from '../assets/4.jpeg';
import five from '../assets/5.jpeg';
// import fourth from '../assets/4.jpeg';
// import fourth from '../assets/4.jpeg';

// Example data with images
const featuredItems = [
    { id: 101, name: "Masala Dosa", price: 6.50, description: "Classic rice crepe.", imageUrl: first },
    { id: 102, name: "Chicken Biriyani", price: 12.99, description: "Fragrant rice dish.", imageUrl: second },
    { id: 103, name: "Pani Puri", price: 4.50, description: "Crispy hollow balls.", imageUrl: third },
    { id: 104, name: "Mango Lassi", price: 3.50, description: "Sweet yogurt drink.", imageUrl: fourth },
    { id: 104, name: "Mango Lassi", price: 3.50, description: "Sweet yogurt drink.", imageUrl: five },
];

/**
 * UPDATED COMPONENT: Image-Only Menu Slider
 * Changes: Removed text details, increased height, overlay navigation.
 */
const MenuSlider = ({ items, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = items.length;

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalItems) % totalItems);
    };

    useEffect(() => {
        if (totalItems <= 1) return;
        const autoPlay = setInterval(nextSlide, interval);
        return () => clearInterval(autoPlay);
    }, [totalItems, interval]);

    if (totalItems === 0) return null;

    // Styles for the Overlay Buttons to make them visible on top of the image
    const navBtnStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 10,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px'
    };

    return (
        <div className="menu-slider-wrapper" style={{ width: '100%', margin: '0 auto' }}>
            {/* Added relative positioning to container for overlay buttons */}
            <div className="menu-carousel" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>

                <div
                    className="menu-slider-track"
                    style={{
                        display: 'flex',
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="slider-item"
                            style={{ minWidth: '100%', position: 'relative' }}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="slider-image"
                                style={{
                                    width: 'auto',
                                    // Increased height for "Big Image" look. 
                                    // You can change '500px' to '60vh' for viewport responsiveness.
                                    height: '500px',
                                    objectFit: 'contain',
                                    display: 'block'
                                }}
                            />
                            {/* Text details section removed completely */}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons (Overlaid) */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    style={{ ...navBtnStyle, left: '20px' }}
                >
                    <FaChevronLeft size={20} />
                </button>

                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    style={{ ...navBtnStyle, right: '20px' }}
                >
                    <FaChevronRight size={20} />
                </button>

                {/* Dots (Overlaid at bottom) */}
                <div
                    className="carousel-dots"
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '10px',
                        zIndex: 10
                    }}
                >
                    {items.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: currentIndex === index ? '#fff' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main Menu Component
const Menu = ({ addToCart, cart, isMobile }) => {
    return (
        <section id="menu">
            <div className="container">
                <div className="section-title">
                    <h2>Our Featured Dishes</h2>
                    <p>A taste of our most popular items.</p>
                </div>

                {/* SLIDER */}
                <MenuSlider items={featuredItems} />

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ddd' }} />

                <div style={{ textAlign: 'center' }}>
                    <a href="menu.pdf" className="button primary-btn">
                        View Full Menu
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Menu;