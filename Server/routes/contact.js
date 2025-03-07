import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        if (!firstName || !lastName || !email || !phone || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const phoneRegex = /^\d{10,}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ error: 'Phone number must be at least 10 digits' });
        }

        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ error: 'This email is already used' });
        }

        const newContact = new Contact({ firstName, lastName, email, phone, message });

        await newContact.save();

        res.status(201).json({ message: 'Contact saved successfully' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
