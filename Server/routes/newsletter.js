import express from 'express';
import Connection from '../models/Connection.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;

    try {
        const existingConnection = await Connection.findOne({ email });
        if (existingConnection) {
            return res.status(400).json({ message: 'Email already subscribed.' });
        }

        const newConnection = new Connection({ email });
        await newConnection.save();
        res.status(201).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Error subscribing:', error);
        res.status(500).json({ message: 'Server error. Please try again.' });
    }
});

export default router;
