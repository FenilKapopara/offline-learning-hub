const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role: role || 'student'
        });

        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        console.log("Login attempt:", req.body);
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            console.log("User not found");
            return res.status(404).json('User not found');
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            console.log("Invalid password");
            return res.status(400).json('Wrong password');
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '3d' });
        const { password, ...others } = user._doc;

        console.log("Login success");
        res.status(200).json({ ...others, token });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json(err);
    }
});

module.exports = router;
