const mongoose = require("mongoose")
const Schema = mongoose.Schema 
const userSchema = new Schema({
   username: {
         type: String,
         required: true
   },
   email: {
         type: String,
         required: true
   },
   password: {
         type: String,
         required: true,
      //    enum: ["High", "Medium", "Low"],
      //    default: "Low"
   },
 tasks:[{
    type: Schema.Types.ObjectId,
    ref: "Task",
 }]
})
module.exports = mongoose.model("User", userSchema)