import User from "../../../model/user";
import bcrypt from "bcrypt";
import connectDB from "../../../middleware/mongodb";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "POST") {
    try {
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      //create new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });

      //check exist email
      const existEmail = await User.findOne({ email: req.body.email });
      if (existEmail) return res.status(400).send("Email already exists");

      const existUsername = await User.findOne({
        username: req.body.username,
      });
      if (existUsername) return res.status(400).send("UserName already exists");

      //save user and respond
      const user = await newUser.save();
      res.status(200).send(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
export default connectDB(handler);
