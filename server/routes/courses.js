const router = require('express').Router();
const Course = require('../models/Course');
const { verifyToken, verifyTokenAndTutor } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Multer Config for Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });

// CREATE COURSE (Tutor Only)
router.post('/', verifyTokenAndTutor, upload.single('file'), async (req, res) => {
    try {
        const newCourse = new Course({
            ...req.body,
            tutor: req.user.id,
            content: req.file ? `/uploads/${req.file.filename}` : '',
        });
        const savedCourse = await newCourse.save();
        res.status(200).json(savedCourse);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL COURSES
router.get('/', async (req, res) => {
    try {
        const qSubject = req.query.subject;
        const qLevel = req.query.level;
        let courses;

        if (qSubject && qLevel) {
            courses = await Course.find({ subject: qSubject, level: qLevel }).populate('tutor', 'name');
        } else if (qSubject) {
            courses = await Course.find({ subject: qSubject }).populate('tutor', 'name');
        } else if (qLevel) {
            courses = await Course.find({ level: qLevel }).populate('tutor', 'name');
        } else {
            courses = await Course.find().populate('tutor', 'name');
        }
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ENROLL IN COURSE
router.post('/:id/enroll', verifyToken, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json("Course not found");

        if (!course.enrolledStudents.includes(req.user.id)) {
            await course.updateOne({ $push: { enrolledStudents: req.user.id } });
            res.status(200).json("Enrolled successfully");
        } else {
            res.status(403).json("You are already enrolled");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET COURSE BY ID
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('tutor', 'name');
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
