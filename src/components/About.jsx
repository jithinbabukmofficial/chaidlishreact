import React from 'react';
import { FaPepperHot, FaCouch, FaClock } from 'react-icons/fa';
const iconMap = {
    "fas fa-pepper-hot": FaPepperHot,
    "fas fa-couch": FaCouch,
    "fas fa-clock": FaClock,
};

const featuresData = [
    { icon: "fas fa-pepper-hot", title: "Authentic Taste", description: "Traditional recipes and authentic flavors with a Kerala touch." },
    { icon: "fas fa-couch", title: "Resto Café Comfort", description: "A cosy, family-friendly space — not a full restaurant, but full of flavour." },
    { icon: "fas fa-clock", title: "All-Day Service", description: "Serving from morning until night (08:00 - 22:00) — breakfast, lunch & dinner." },
];

const FeatureBox = ({ icon, title, description }) => {
    // Get the component dynamically
    const IconComponent = iconMap[icon];

    return (
        <div className="feature-box">
            {/* 👈 REPLACEMENT */}
            {IconComponent && <IconComponent  />} 
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="section-title">
                    <h2 style={{ color: 'white' }}>Why Choose Chai D’lish?</h2>
                    <p style={{ color: '#ddd' }}>More than just a restaurant, it's a feeling.</p>
                </div>
                <div className="features">
                    {featuresData.map((feature, index) => (
                        <FeatureBox key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;