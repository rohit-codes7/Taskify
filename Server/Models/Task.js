const mongoose = require("mongoose")
const Schema = mongoose.Schema 
const taskSchema = new Schema({
   title: {
         type: String,
         required: true
   },
   description: {
         type: String,
         required: true
   },
   priority: {
         type: String,
         required: true,
         enum: ["High", "Medium", "Low"],
         default: "Low"
   },
   status: {
         type: String,
         required: true,
         enum: ["YetToStart", "InProgress", "Completed", "Pending"],
         default: "YetToStart"
   },
})
module.exports = mongoose.model("Task", taskSchema)