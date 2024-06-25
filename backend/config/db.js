import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sauravaryan155:62074022@cluster0.67whthd.mongodb.net/food-del"
  ).then(()=>console.log("DB Connected"));
};
