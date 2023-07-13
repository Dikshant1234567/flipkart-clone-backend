import mongoose from "mongoose";

const Dbconnection = async () => {
  const url =
    'mongodb+srv://Dikshant:dikshant@cluster0.shw42x5.mongodb.net/?retryWrites=true&w=majority';
  const Url =
    "mongodb+srv://Dikshant:dikshant@cluster0.shw42x5.mongodb.net/?retryWrites=true&w=majority";

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected successfully...");
  } catch (error) {
    console.log("error while connecting to databse:", error);
  }
};

export default Dbconnection;
