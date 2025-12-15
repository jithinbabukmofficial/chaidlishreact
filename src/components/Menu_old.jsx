// src/components/Menu.jsx
import React from 'react';
// Added FaMinus icon
import { FaPlus, FaMinus } from 'react-icons/fa'; 
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
import CategoryNav from './CategoryNav';

/**
 * Renders an individual menu item card with conditional controls.
 * NEW PROPS: cart, isMobile
 */
const MenuItemCard = ({ item, addToCart, cart, isMobile }) => {
    const currentItem = cart[item.id];
    const quantity = currentItem ? currentItem.quantity : 0;
    
    // Logic for rendering the control area
    const renderControls = () => {
        if (!isMobile) {
            // REQUEST 1: Hide controls on desktop, only show price
            return <span className="price">£{item.price.toFixed(2)}</span>;
        }

        // REQUEST 2: Live +/- quantity controls on mobile
        if (quantity > 0) {
            return (
                <div className="item-live-controls">
                    <button 
                        onClick={() => addToCart(item, -1)} 
                        aria-label="Decrease quantity"
                    >
                        <FaMinus size={12} />
                    </button>
                    <span>{quantity}</span>
                    <button 
                        onClick={() => addToCart(item, 1)} 
                        aria-label="Increase quantity"
                    >
                        <FaPlus size={12} />
                    </button>
                </div>
            );
        }

        // Default: Show Add button on mobile if quantity is 0
        return (
            <button 
                className="add-to-cart-btn" 
                onClick={() => addToCart(item)}
                aria-label={`Add ${item.name} to order`}
            >
                <FaPlus /> Add
            </button>
        );
    };

    return (
        <div className="menu-card menu-item">
            {/* Item Details */}
            <div style={{ flexGrow: 1 }}>
                <strong>{item.name}</strong>
                {item.note && <span className="menu-note">{item.note}</span>}
            </div>
            
            {/* Price and Controls Area */}
            <div className="price-and-btn">
                 {/* Show price separately on mobile if controls are also rendered */}
                 {isMobile && !quantity && <span className="price">£{item.price.toFixed(2)}</span>} 
                 {isMobile && quantity > 0 && <span className="price-spacer" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)' }}>£{item.price.toFixed(2)}</span>}
                 
                 {/* If desktop, renderControls handles price display */}
                 {renderControls()}
            </div>
        </div>
    );
};

// MenuCategory is updated to accept cart and isMobile props
const MenuCategory = ({ id, title, items, note, addToCart, cart, isMobile }) => ( 
    <div className="menu-category" id={id}> 
        <h3>{title}</h3>
        {note && <span className="menu-note" style={{ display: 'block', marginTop: '-20px', marginBottom: '20px' }}>{note}</span>}
        <div className="category-content-grid">
            {items.map((item, index) => (
                // PASS new props
                <MenuItemCard 
                    key={index} 
                    item={item} 
                    addToCart={addToCart} 
                    cart={cart} 
                    isMobile={isMobile} 
                /> 
            ))}
        </div>
    </div>
);

// Main Menu Component
const Menu = ({ addToCart, cart, isMobile }) => { 
    const categoryProps = { addToCart, cart, isMobile };
    return (
        <>
            {isMobile && <CategoryNav />} 
            
            <section id="menu">
                <div className="container">
                    <div className="section-title"> 
                        <h2>Our Menu</h2>
                        <p>From Crunchy Nibbles to Sweet Endings</p>
                    </div>

                    <div className="menu-grid">
                        <div>
                            <MenuCategory id="starters" title="Starters" items={starters} {...categoryProps} />
                            <MenuCategory
                                id="dosa-idly" 
                                title="Breakfast, Dosa & Idly"
                                items={breakfastDosa}
                                note="All dosas & idly served with sambar and chutney."
                                {...categoryProps}
                            />
                        </div>

                        <div>
                            <MenuCategory id="thali-biriyani" title="Thali Meals & Biriyani" items={thaliBiriyani} {...categoryProps} />
                            <MenuCategory id="mains" title="Mains (Curries)" items={mains} {...categoryProps} />
                        </div>
                    </div>

                    <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ddd' }} />

                    <div className="menu-grid">
                        <div>
                            <MenuCategory id="hot-drinks" title="Hot Drinks & Shakes" items={hotDrinks} {...categoryProps} />
                            <MenuCategory id="juices" title="Fresh Juices & Mojitos" items={juicesMojitos} {...categoryProps} />
                        </div>

                        <div>
                            <MenuCategory id="desserts" title="Desserts" items={desserts} {...categoryProps} />
                            <MenuCategory id="sides" title="Sides & Breads" items={sides} {...categoryProps} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;