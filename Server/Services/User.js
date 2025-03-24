const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const  jwt = require('jsonwebtoken')
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" })
        }
        if (username.length < 5) {
            return res.status(400).json({ error: "Username must be at least 5 characters long" })
        }
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" })
        }
        const checkUser = await User.findOne({ $or: [{ email: email }, { username: username }] })
        if (checkUser) {
            return res.status(400).json({ error: "Username or email already exists" })
        }
        else {
            const hashPass = await bcrypt.hash(password, 10)
            const newUser = new User({ username, email, password: hashPass });
            await newUser.save()
            return res.status(200).json({ success: "Registration successful" })
        }
    } catch (error) {
        console.error(error); // Log the actual error to see what's wrong
        return res.status(500).json({ error: "Internal server error" });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, checkUser.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { _id: checkUser._id, email: checkUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        // Set cookie
        res.cookie("taskifyUserToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });

        return res.status(200).json({ success: "Login successful", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { register , login }
