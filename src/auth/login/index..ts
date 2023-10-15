import { generateToken } from "../../jwt";
import userModel from "../../models/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    const token = generateToken(user?.password);
    if (!user) {
      return res
        .json({
          msg: "invalid email or password",
        })
        .status(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.json({
        msg: "invalid email or password",
      });
    }

    return res
      .json({
        msg: "user login successful and token was generated",
        email,
        token,
        user,
      })
      .status(201);
  } catch (err) {
    return res.json({
      msg: "error",
      err,
    });
  }
};
