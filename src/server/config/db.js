const mongoose = require("mongoose");
const db = "mongodb+srv://logrocket:Fwfz2nWH55E0VEQi@cluster1.dydb2rf.mongodb.net/juke_joint?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

