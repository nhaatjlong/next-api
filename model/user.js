import mongoose from "mongoose";
var Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 5,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 255,
      min: 5,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 3,
    },
  },
  { timestamps: true }
);
mongoose.models = {};

var User = mongoose.model("User", userSchema);

export default User;
// export default mongoose.models.User || mongoose.model("User", userSchema);
