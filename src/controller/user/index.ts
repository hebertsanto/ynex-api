import userModel from "../../models/user";
import { Request, Response } from "express";

export const CreateUser = async (req: Request, res: Response) => {
    
  const { name, email, password } = req.body;

  try {
    const newUser = await userModel.create({
      name,
      email,
      password,
    });
    res
      .json({
        msg: "user created successfully",
        newUser,
      })
      .status(201);
  } catch (err) {
    return res.json({
      msg: "error",
      err,
    });
  }
};
