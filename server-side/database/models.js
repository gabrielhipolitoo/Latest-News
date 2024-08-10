import mongoose from "mongoose";

const EmailSchema = mongoose.model("Email", {
  email: String,
});

export default EmailSchema;
