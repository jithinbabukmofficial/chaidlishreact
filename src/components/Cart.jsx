// src/components/Cart.jsx
import React, { useState } from 'react';
import { FaTimes, FaPlus, FaMinus, FaUser, FaChair, FaWhatsapp } from 'react-icons/fa'; 
import { generateWhatsAppLink } from '../WhatsAppLink';

const Cart = ({ cart, addToCart, onClose, clearCart, isFullPage }) => {
    // Initial state set to 'takeaway'
    const [orderType, setOrderType] = useState('takeaway'); 
    const [customerDetail, setCustomerDetail] = useState(''); 
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const cartItems = Object.values(cart);
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; 
    
    const handleCheckout = () => {
        if (!customerDetail.trim()) {
            alert(orderType === 'takeaway' ? 'Please enter your Name or Phone number for takeaway.' : 'Please enter your Table Number.');
            return;
        }

        const whatsappLink = generateWhatsAppLink(cart, orderType, customerDetail);
        window.open(whatsappLink, '_blank'); 

        setIsOrderPlaced(true);
        setTimeout(() => {
            clearCart();
            onClose(); 
            setIsOrderPlaced(false);
        }, 1000); 
    };

    const containerClass = isFullPage ? "cart-full-page" : "cart-modal"; 

    if (isOrderPlaced) {
        return (
            <div className={containerClass}>
                <button className="close-btn" onClick={onClose} aria-label="Close cart"><FaTimes /></button>
                <h2>✅ Order Sent!</h2>
                <p>A WhatsApp message has been generated. Please **send** the message to confirm your order with us.</p>
                <button className="btn" onClick={onClose}>Back to Menu</button>
            </div>
        );
    }

    return (
        <div className={isFullPage ? "cart-full-page-wrapper" : "cart-modal-overlay"}> 
            <div className={containerClass}>
                 <button className="close-btn" onClick={onClose} aria-label="Close cart"><FaTimes /></button> 

               <h3>Your Order ({cartItems.length} items)</h3>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty. Tap 'Home' and add some delicious chai and food!</p>
                ) : (
                    <>
                        {/* Scrollable Item List */}
                        <div className="cart-items-list">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-details">
                                        <strong>{item.name}</strong>
                                        <p>£{item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="item-controls">
                                        <button onClick={() => addToCart(item, -1)} aria-label="Decrease quantity"><FaMinus size={12} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item, 1)} aria-label="Increase quantity"><FaPlus size={12} /></button>
                                    </div>
                                    <span className="item-total">£{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Fixed Checkout Footer */}
                        <div className="cart-footer">
                            
                            {/* NEW: Order Type Toggle (Segmented Control) */}
                            <div className="order-type-toggle">
                                <button
                                    className={orderType === 'takeaway' ? 'active' : ''}
                                    onClick={() => setOrderType('takeaway')}
                                    aria-pressed={orderType === 'takeaway'}
                                >
                                    Takeaway
                                </button>
                                <button
                                    className={orderType === 'dine-in' ? 'active' : ''}
                                    onClick={() => setOrderType('dine-in')}
                                    aria-pressed={orderType === 'dine-in'}
                                >
                                    Eat In (Table No.)
                                </button>
                            </div>

                            {/* Customer/Table Input Group with cleaner design */}
                            <div className="identifier-group">
                                <div style={{ position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '10px', top: '12px', color: 'var(--primary)' }}>
                                        {orderType === 'takeaway' ? <FaUser /> : <FaChair />}
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={orderType === 'takeaway' ? 'Your Name or Phone Number' : 'Table Number'}
                                        value={customerDetail}
                                        onChange={(e) => setCustomerDetail(e.target.value)}
                                        className="identifier-input"
                                        style={{ paddingLeft: '35px' }} // Space for the icon
                                        required
                                    />
                                </div>
                                <p className="identifier-helper-text">
                                    {orderType === 'takeaway' 
                                        ? 'Name or Phone number for order collection.'
                                        : 'Please enter the number on your table.'
                                    }
                                </p>
                            </div>

                            <div className="cart-total">
                                <strong>Total:</strong>
                                <span>£{total.toFixed(2)}</span>
                            </div>

                            <button className="btn" onClick={handleCheckout}>
                                <FaWhatsapp style={{ marginRight: '8px' }} /> Send Order via WhatsApp
                            </button>
                            <button className="btn btn-clear-cart" onClick={clearCart}>Clear Cart</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;