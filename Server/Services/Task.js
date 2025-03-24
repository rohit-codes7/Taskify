const Task = require('../Models/Task');

const addTask = async (req, res) => {
    try{
        const {title,discription,priority} = req.body;
        const {user} = req.user;

    }
    catch(error){
        console.error(error); // Log the actual error to see what's wrong
        return res.status(404).json({ error: "Internal server error" });
    }
}