import { generateToken } from "../../jwt";
import userModel from "../../models/user";
import { hashPassword } from "../../util/hash";
import { Request, Response } from "express";

export const CreateUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const emailAlreadyExists = await userModel.findOne({ email });

  if (emailAlreadyExists) {
    return res.json({
      msg: "email already in use",
    });
  }
  const token = generateToken('jsdijfidsjifa');

  console.log(token);
  try {
   
    const hash = await hashPassword(password);
    const newUser = await userModel.create({
      name,
      email,
      password: hash,
    });
    return res
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
