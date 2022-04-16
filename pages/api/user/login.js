import connectDB from "../../../middleware/mongodb";

import User from "../../../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "POST") {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(404).json("Email or password is wrong !");
        return;
      } else {
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );

        if (!validPassword) {
          res.status(400).json("Wrong password");
        } else {
          const token = jwt.sign(
            { _id: user._id },
            process.env.NEXT_PUBLIC_TOKEN_KEY
          );
          res.json({ user, token });
        }
      }
    } catch (err) {
      res.status(500).json("co loi xay raa");
    }
  }
};
export default connectDB(handler);
