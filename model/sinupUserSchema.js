import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    lowercase:true,
    index: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const sinupUser = mongoose.model("user", userSchema);

export default sinupUser;
