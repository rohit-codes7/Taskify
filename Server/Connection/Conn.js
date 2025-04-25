const mongoose = require("mongoose");
require("dotenv").config();

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("Connection failed:",err);
  }
};

conn();
