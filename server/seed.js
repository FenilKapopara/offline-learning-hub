const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

const coursesData = [
    { title: "Introduction to Physics", subject: "Science", level: "Beginner", contentType: "video", content: "https://www.youtube.com/watch?v=b1t41Q3xRM8", thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80" },
    { title: "Advanced Calculus", subject: "Math", level: "Advanced", contentType: "pdf", content: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx", thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80" },
    { title: "World History: The 20th Century", subject: "History", level: "Intermediate", contentType: "video", content: "https://www.youtube.com/watch?v=e_2of8pmHYU", thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80" },
    { title: "Organic Chemistry Basics", subject: "Science", level: "Intermediate", contentType: "pdf", content: "https://www2.chemistry.msu.edu/faculty/reusch/VirtTxtJml/intro1.htm", thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80" },
    { title: "English Literature: Shakespeare", subject: "Literature", level: "Beginner", contentType: "audio", content: "https://librivox.org/", thumbnail: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=800&q=80" },
    { title: "Introduction to Psychology", subject: "Psychology", level: "Beginner", contentType: "video", content: "https://www.youtube.com/watch?v=vo4pMVb0R6M", thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
    { title: "Microeconomics 101", subject: "Economics", level: "Beginner", contentType: "pdf", content: "https://openstax.org/details/books/principles-microeconomics-2e", thumbnail: "https://images.unsplash.com/photo-1526304640152-d4619684e484?w=800&q=80" },
    { title: "Java Programming for Beginners", subject: "Computer Science", level: "Beginner", contentType: "video", content: "https://www.youtube.com/watch?v=eIrMbAQSU34", thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" },
    { title: "Art History: Renaissance", subject: "Art", level: "Intermediate", contentType: "video", content: "https://www.youtube.com/watch?v=xf2G2Il8crw", thumbnail: "https://images.unsplash.com/photo-1518998053901-5348d3969105?w=800&q=80" },
    { title: "Music Theory Fundamentals", subject: "Music", level: "Beginner", contentType: "pdf", content: "https://www.musictheory.net/lessons", thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?w=800&q=80" },
    { title: "Introduction to Sociology", subject: "Sociology", level: "Beginner", contentType: "video", content: "https://www.youtube.com/watch?v=YnCJU6PaCio", thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
    { title: "Philosophy: The Great Thinkers", subject: "Philosophy", level: "Advanced", contentType: "audio", content: "https://historyofphilosophy.net/", thumbnail: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&q=80" },
    { title: "Human Biology", subject: "Science", level: "Intermediate", contentType: "pdf", content: "https://openstax.org/details/books/biology-2e", thumbnail: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=800&q=80" },
    { title: "Geography of the World", subject: "Geography", level: "Beginner", contentType: "video", content: "https://www.youtube.com/watch?v=ppM032s2j4U", thumbnail: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=80" },
    { title: "Data Science with Python", subject: "Computer Science", level: "Advanced", contentType: "video", content: "https://www.youtube.com/watch?v=ua-CiDNNj30", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');

        // Create a default Tutor if not exists
        let tutor = await User.findOne({ email: 'tutor@globalseed.com' });
        if (!tutor) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('123456', salt);
            tutor = await new User({
                name: "System Tutor",
                email: "tutor@globalseed.com",
                password: hashedPassword,
                role: "tutor"
            }).save();
            console.log('Created default tutor');
        }

        // Clear existing courses
        await Course.deleteMany({});

        const coursesWithTutor = coursesData.map(c => ({ ...c, tutor: tutor._id }));
        await Course.insertMany(coursesWithTutor);

        console.log('Seeded 15 courses');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
