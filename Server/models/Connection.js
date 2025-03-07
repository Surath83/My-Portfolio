import mongoose from 'mongoose';

const connectionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

const Connection = mongoose.model('Connection', connectionSchema);

export default Connection;
