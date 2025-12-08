import React from 'react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <h1>Chai D’lish</h1>
                <p>A Slice of South India in Every Bite</p>
                <div className="hero-btns">
                    <a href="#menu" className="btn">View Menu</a>
                    {/* The number is replaced with the correct contact number from the JSON-LD / Contact section */}
                    <a href="tel:+447426782449" className="btn btn-outline">Call to Order</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;