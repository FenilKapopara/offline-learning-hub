const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token || req.headers.authorization;
    if (authHeader) {
        const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};

const verifyTokenAndTutor = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role === 'tutor') {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

module.exports = { verifyToken, verifyTokenAndTutor };
