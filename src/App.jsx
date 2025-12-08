// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart'; 
import MobileNav from './components/MobileNav';
import { useIsMobile } from './hooks/useIsMobile'; 
// Import FaShoppingCart for the desktop floating button (still used for desktop fallback)
import { FaShoppingCart } from 'react-icons/fa'; 

const App = () => {
    const isMobile = useIsMobile(); 
    const [cart, setCart] = useState({});
    const [activeView, setActiveView] = useState('home'); 

    // Function to add/update item in cart
    const addToCart = (item, quantity = 1) => {
        setCart(prevCart => {
            const existingItem = prevCart[item.id];
            const newQuantity = (existingItem ? existingItem.quantity : 0) + quantity;

            if (newQuantity <= 0) {
                // If quantity drops to zero or below, remove the item
                const { [item.id]: removed, ...rest } = prevCart;
                return rest;
            }

            return {
                ...prevCart,
                [item.id]: {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: newQuantity,
                }
            };
        });
        // Keep view on 'home' when adding items
        if (isMobile) setActiveView('home'); 
    };

    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

    // --- Mobile Ordering View (App-like experience) ---
    const MobileOrderingApp = (
        <>
            <main className="mobile-main-content">
                {/* PASS cart and isMobile */}
                {activeView === 'home' && <Menu addToCart={addToCart} cart={cart} isMobile={isMobile} />}
                {activeView === 'cart' && (
                    <Cart 
                        cart={cart} 
                        addToCart={addToCart}
                        onClose={() => setActiveView('home')} 
                        clearCart={() => setCart({})}
                        isFullPage={true} 
                    />
                )}
            </main>
            
            <MobileNav 
                totalItems={totalItems} 
                setActiveView={setActiveView}
                isCartView={activeView === 'cart'}
            />
        </>
    );

    // --- Desktop Website View (Full site experience) ---
    const DesktopWebsite = (
        <>
            <main>
                <Hero />
                <Intro />
                <Highlights />
                {/* PASS cart and isMobile */}
                <Menu addToCart={addToCart} cart={cart} isMobile={isMobile} /> 
                <About />
                <Gallery />
                <Contact />
            </main>
            <Footer />
            
            {/* Desktop Cart Modal/Button (Can be expanded if a desktop modal is implemented later) */}
            {totalItems > 0 && (
                <button 
                    className="floating-cart-btn" 
                    onClick={() => console.log('Desktop Cart Open')} 
                    aria-label={`View cart with ${totalItems} items`}
                >
                    <FaShoppingCart size={24} /> 
                    <span className="cart-count">{totalItems}</span>
                </button>
            )}
        </>
    );
    
    return (
        <>
            <Header />
            
            {/* CONDITIONAL RENDERING */}
            {isMobile ? MobileOrderingApp : DesktopWebsite}
        </>
    );
};

export default App;