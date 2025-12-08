// src/components/CategoryNav.jsx
import React from 'react';

// List of categories and their corresponding element IDs in Menu.jsx
const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'dosa-idly', name: 'Dosa & Idly' },
    { id: 'thali-biriyani', name: 'Thali & Biriyani' },
    { id: 'mains', name: 'Mains' },
    { id: 'hot-drinks', name: 'Hot Drinks' },
    { id: 'juices', name: 'Juices/Mojitos' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'sides', name: 'Sides' },
];

const CategoryNav = () => {
    // Scroll function to jump to the category section
    const scrollToCategory = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Calculate offset to account for the fixed header (65px) and fixed category nav (approx 50px)
            const offset = 115; 
            
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        // The 'category-nav-scroll' class handles fixed positioning and horizontal scroll
        <nav className="category-nav-scroll">
            <div className="category-nav-content">
                {categories.map((cat) => (
                    <a
                        key={cat.id}
                        href={`#${cat.id}`}
                        onClick={(e) => {
                            e.preventDefault(); 
                            scrollToCategory(cat.id);
                        }}
                    >
                        {cat.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default CategoryNav;