// import { gsap } from "./node_modules/gsap/index.js";
// import { ScrollTrigger } from "./node_modules/gsap/ScrollTrigger.js";

import { gasp, scrollTrigger } from "./node_modules/gsap/index.jas/all";

document.addEventListener("DOMContentLoaded", () => {
    const pageContainers = document.querySelectorAll(".page-container");

    // Define flipPages inside DOMContentLoaded
    const flipPages = (index) => {
        pageContainers.forEach((container, i) => {
            const page = container.querySelector(".page");
            if (i < index) {
                page.classList.add("flipped");
                console.log(`Page ${i + 1} flipped.`);
            } else {
                page.classList.remove("flipped");
                console.log(`Page ${i + 1} reset.`);
            }
        });
    };

    // GSAP ScrollTrigger setup
    gsap.to(".sketchbook__pages", {
        xPercent: -100 * (pageContainers.length / 2 - 1), // Adjust for two pages at a time
        scrollTrigger: {
            trigger: ".sketchbook",
            start: "top top",
            end: () => `+=${pageContainers.length * window.innerWidth}`,
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
                const pageIndex = Math.round(self.progress * (pageContainers.length / 2));
                flipPages(pageIndex); // Call flipPages here
            },
        },
    });
});




// document.addEventListener("DOMContentLoaded", () => {
//     // Register GSAP ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger);

//     const pageContainers = document.querySelectorAll(".page-container");

//     // Handle dynamic page flipping
//     const flipPages = (index) => {
//         const pageContainers = document.querySelectorAll(".page-container");
//         pageContainers.forEach((container, i) => {
//             const page = container.querySelector(".page");
//             if (i < index) {
//                 page.classList.add("flipped");
//                 console.log(`Page ${i + 1} flipped.`);
//             } else {
//                 page.classList.remove("flipped");
//                 console.log(`Page ${i + 1} reset.`);
//             }
//         });
//     };
    

//     // GSAP ScrollTrigger setup for horizontal scrolling and flipping
//     gsap.to(".sketchbook__pages", {
//         xPercent: -100 * (pageContainers.length / 2 - 1), // Adjust for two pages at a time
//         scrollTrigger: {
//             trigger: ".sketchbook",
//             start: "top top",
//             end: () => `+=${pageContainers.length * window.innerWidth}`,
//             pin: true,
//             scrub: 1,
//             onUpdate: (self) => {
//                 const pageIndex = Math.round(self.progress * (pageContainers.length / 2));
//                 console.log(`Scroll progress: ${self.progress}, Current page index: ${pageIndex}`);
//                 flipPages(pageIndex);
//             },
//         },
//     });
// });



// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();

// // Middleware
// app.use(bodyParser.json()); // Parse JSON request bodies

// // POST route for sending emails
// app.post('/send-email', async (req, res) => {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).send('All fields are required!');
//     }

//     // Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail', // or another email service like Yahoo, Outlook
//         auth: {
//             user: process.env.EMAIL_USER, // From .env file
//             pass: process.env.EMAIL_PASS, // From .env file
//         },
//     });

//     const mailOptions = {
//         from: email,
//         to: process.env.EMAIL_RECEIVER, // Your email address
//         subject: `New message from ${name}`,
//         text: message,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).send('Message sent successfully!');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('Failed to send message. Please try again later.');
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
