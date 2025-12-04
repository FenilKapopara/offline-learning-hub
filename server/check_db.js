const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const checkDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
        const users = await User.find({});
        console.log('Users found:', users.length);
        users.forEach(u => console.log(u.email, u.role));
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

checkDB();
