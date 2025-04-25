const Task = require('../Models/Task');

const addTask = async (req, res) => {
    try{
        const {title,description,priority} = req.body;
        const {user} = req.user;
        if(!title || !description || !priority) {
            return res.status(400).json({error: "All fields are required"});
        }
        if(title.length < 5) {
            return res.status(400).json({error: "Title must be at least 5 characters long"});
        }
        if(description.length < 10) {
            return res.status(400).json({error: "Description must be at least 10 characters long"});
        }

        const newTask = new Task({
            title,
            description,
            priority,
            user: user._id

        });
        await newTask.save();
        // user.tasks.push(newTask._id); // Add the task ID to the user's tasks array
        // await user.save(); // Save the user to update the tasks array
        return res.status(200).json({success: "Task added successfully"});

    }
    catch(error){
        console.error(error); // Log the actual error to see what's wrong
        return res.status(404).json({ error: "Internal server error" });
    }
}


// edit task
const editTask = async (req, res) => {
    try{

        const {id} = req.params;
        const {title,description,priority} = req.body;
        // const {user} = req.user;
        if(!title || !description || !priority) {
            return res.status(400).json({error: "All fields are required"});
        }
        if(title.length < 5) {
            return res.status(400).json({error: "Title must be at least 5 characters long"});
        }
        if(description.length < 10) {
            return res.status(400).json({error: "Description must be at least 10 characters long"});
        }

       await Task.findByIdAndUpdate(id, {
            title,
            description,
            priority,
            user: user._id

        });
        return res.status(200).json({success: "Task updated successfully"});
    }
    catch(error){
        console.error(error); // Log the actual error to see what's wrong
        return res.status(404).json({ error: "Internal server error" });
    }
}


// get task
const getTask = async (req, res) => {
    try{

        const {id} = req.params;
        const taskDetails = await Task.findById(id);
       
     

        return res.status(200).json({success: "Successfully fetched task"});
    }
    catch(error){
        console.error(error); // Log the actual error to see what's wrong
        return res.status(404).json({ error: "Internal server error" });
    }
}


// delete task
const deleteTask = async (req, res) => {
    try{

        const {id} = req.params;
       await Task.findByIdAndDelete(id);
       
     

        return res.status(200).json({success: "Task deleted successfully"});
    }
    catch(error){
        console.error(error); // Log the actual error to see what's wrong
        return res.status(404).json({ error: "Internal server error" });
    }
}


module.exports = {
    addTask,
    editTask,
    getTask,
    deleteTask
}