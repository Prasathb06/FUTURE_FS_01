const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

// POST /api/contact
router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newMessage = new Contact({ name, email, message });
        await newMessage.save();

        // Send email notification
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Message",
            text: `You received a new message from ${name} (${email}):\n\n${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Email error:", error);
            }
        });

        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
