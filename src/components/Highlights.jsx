import React from 'react';

const highlightsData = [
    {
        title: "Breakfast & Dosa",
        description: "Crispy Dosas, fluffy Idlies, and Appams served with sambar and chutneys.",
        imgSrc: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imgAlt: "Masala Dosa"
    },
    {
        title: "Meals & Thalis",
        description: "A complete meal on a plate. Veg and Non-Veg traditional South Indian Thalis.",
        imgSrc: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imgAlt: "Thali"
    },
    {
        title: "Curries & Combos",
        description: "Rich curries like Beef Roast, Kothu Parotta, and classic Butter Chicken.",
        imgSrc: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imgAlt: "Kerala Chicken Curry"
    },
];

const HighlightCard = ({ title, description, imgSrc, imgAlt }) => (
    <div className="card">
        <img src={imgSrc} alt={imgAlt} />
        <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="section-title">
                    <h2>What We Serve</h2>
                    <p>Authentic flavors, fresh ingredients</p>
                </div>
                <div className="grid-3">
                    {highlightsData.map((item, index) => (
                        <HighlightCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;