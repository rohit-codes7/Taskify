const router = require('express').Router();
const authMiddleware = require('../Middleware/authMiddleware')
const {addTask, editTask, getTask, deleteTask} = require('../Services/Task')

router.post('/addTask', authMiddleware,addTask);
router.put('/editTask/:id', authMiddleware, editTask);
router.get('/getTask', authMiddleware, getTask);
router.delete('/deleteTask/:id', authMiddleware, deleteTask);


module.exports = router;