import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Already connected to DB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
        });
        isConnected = true;
        console.log('Connected to DB');
    } catch (err) {
        console.error('Error connecting to DB:', err.message); // Log detailed error
    }
};
