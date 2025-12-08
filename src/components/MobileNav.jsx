// src/components/MobileNav.jsx
import React from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const MobileNav = ({ totalItems, setActiveView, isCartView }) => {
    return (
        <nav className="mobile-bottom-nav">
            <button 
                onClick={() => setActiveView('home')} 
                className={!isCartView ? 'active' : ''}
                aria-label="Home / Menu"
            >
                <FaHome size={20} />
                <span>Home</span>
            </button>
            <button 
                onClick={() => setActiveView('cart')} 
                className={isCartView ? 'active' : ''}
                aria-label={`View Cart with ${totalItems} items`}
            >
                <FaShoppingCart size={20} />
                <span>Cart</span>
                {/* {totalItems > 0 && (
                    <span className="cart-count-badge">{totalItems}</span>
                )} */}
            </button>
        </nav>
    );
};

export default MobileNav;