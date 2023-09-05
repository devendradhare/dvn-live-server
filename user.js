const mongoose = require("mongoose");
const dotenv = require("dotenv");

const DB =process.env.DATABASE;
  
// mongoose.connect("mongodb://127.0.0.1:27017/live_bus_db");
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch(error => console.log(error.message));

// const db = mongoose.connection;

// db.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

// db.on("error", err => {
//   console.error("MongoDB connection error:", err);
// });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true // Ensure email is unique
  },
  email_verified: Boolean,
  family_name: String,
  given_name: String,
  locale: String,
  name: String,
  nickname: {
    type: String,
    unique: true // Ensure nickname is unique
  },
  picture: String,
  sub: String,
  updated_at: {
    type: Date,
    default: Date.now // Set the default value to the current date
  }
});

module.exports = mongoose.model("User", userSchema);
