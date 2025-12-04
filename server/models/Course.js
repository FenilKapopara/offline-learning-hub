const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String, required: true },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'All'], default: 'All' },
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    thumbnail: { type: String }, // URL to image
    content: { type: String }, // URL to video/pdf
    contentType: { type: String, enum: ['video', 'pdf', 'audio'], required: true },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    rating: { type: Number, default: 0 },
    reviews: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
