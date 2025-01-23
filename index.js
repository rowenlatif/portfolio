const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// POST route for sending emails
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required!');
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or another email service like Yahoo, Outlook
        auth: {
            user: process.env.EMAIL_USER, // From .env file
            pass: process.env.EMAIL_PASS, // From .env file
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER, // Your email address
        subject: `New message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send message. Please try again later.');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
