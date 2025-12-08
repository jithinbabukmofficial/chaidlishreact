import React from 'react';

// 👈 IMPORTS
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const phoneNumber = "+447426782449";
    const emailAddress = "info@chaidlish.co.uk";
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.4716496465355!2d-3.4839812239649516!3d51.20790153093959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486df8155255018b%3A0x63351d5cc23577d6!2s20%20Friday%20St%2C%20Minehead%20TA24%205TH%2C%20UK!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"; // Placeholder map URL

    return (
        <section id="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Visit Us</h2>
                    <p>Experience the Taste of South India Today</p>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Chai D’lish</h3>
                        {/* 👈 REPLACEMENTS */}
                        <p><FaMapMarkerAlt /> Minehead, United Kingdom</p>
                        <p><FaPhone /> <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>{phoneNumber}</a></p>
                        <p><FaEnvelope /> <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                        <br />
                        <h3>Opening Hours</h3>
                        <p><strong>Mon - Sun:</strong> 08:00 AM – 10:00 PM (22:00)</p>
                        <br />
                        <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="btn">Call for Takeaway</a>
                    </div>
                    <div className="map-container">
                        <iframe
                            src={mapSrc}
                            title="Chai D'lish Location"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '8px', marginTop: '30px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;