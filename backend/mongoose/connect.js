import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .then((error) => console.log(error));
}

export default connectDB;