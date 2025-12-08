import React from 'react';

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Indian Food Platter" },
    { src: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Masala Chai" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Indian Curry" },
    { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Falooda Dessert" },
];

const Gallery = () => {
    return (
        <section id="gallery">
            <div className="container">
                <div className="section-title">
                    <h2>Our Gallery</h2>
                </div>
                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;