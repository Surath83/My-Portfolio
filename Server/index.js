import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes); 

const MONGO_URI = process.env.MONGO_URI; 
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ MongoDB Connected');
    } catch (error) {
        console.error('❌ DB Connection Error:', error.message);
        process.exit(1); 
    }
};

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});


