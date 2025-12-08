import React from 'react';

const Intro = () => {
    return (
        <section id="intro">
            <div className="container">
                <h2>Welcome to Chai D’lish</h2>
                <p style={{ maxWidth: '700px', margin: '15px auto' }}>
                    Minehead’s cosy Indian Resto Café, serving real South Indian flavours from morning to night. Enjoy wholesome breakfasts, flavour-packed lunch plates, and satisfying dinner meals — all freshly made with authentic home-style recipes.
                </p>
                <div className="intro-icons">
                    <span>🥞 Breakfast</span>
                    <span>🍛 Lunch</span>
                    <span>🍽️ Dinner</span>
                    <span>☕ Drinks</span>
                    <span>🍨 Desserts</span>
                </div>
            </div>
        </section>
    );
};

export default Intro;