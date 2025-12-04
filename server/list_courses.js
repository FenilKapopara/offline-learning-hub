const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

const listCourses = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
        const courses = await Course.find({});
        console.log(`Found ${courses.length} courses:`);
        courses.forEach(c => console.log(`- ${c.title} (${c.subject})`));
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

listCourses();
