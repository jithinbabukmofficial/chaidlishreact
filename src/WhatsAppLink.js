// src/WhatsAppLink.js

// Replace with the actual WhatsApp number for Chai D'lish
const WHATSAPP_NUMBER = "447426782449"; // No '+' or '00'

export const generateWhatsAppLink = (cart, orderType, identifier) => {
    const total = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    
    // 1. Order Type Header
    let message = `*NEW ORDER - CHAI D’LISH*\n\n`;

    if (orderType === 'takeaway') {
        message += `*ORDER TYPE: Takeaway*\n`;
        message += `*Customer Name/Phone:* ${identifier}\n\n`;
    } else if (orderType === 'dine-in') {
        message += `*ORDER TYPE: Dine-In (Table)*\n`;
        message += `*Table Number:* ${identifier}\n\n`;
    } else {
        message += `*ORDER TYPE: UNKNOWN*\n\n`;
    }

    // 2. Item List
    message += `*--- Order Details ---\n*`;
    Object.values(cart).forEach(item => {
        const lineTotal = (item.price * item.quantity).toFixed(2);
        message += `${item.quantity}x ${item.name} (£${lineTotal})\n`;
    });

    // 3. Totals
    message += `\n*TOTAL: £${total}*`;
    message += `\n\n_Please confirm this order and preparation time. Thank you!_`;

    // Encode the message and return the WhatsApp link
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};