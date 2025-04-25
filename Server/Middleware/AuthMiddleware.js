const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.taskifyUserToken;
    try{
        if(!token) {
            return res.status(401).json({error: "new-user"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
    
    if(!user) {
        return res.status(401).json({error: "User not found"});
    }
    req.user = user;
    next();
    } catch (error) {
        console.error(error); // Log the actual error to see what's wrong
        return res.status(500).json({ error: "Invalid Token" });
    }

}

module.exports = authMiddleware;
