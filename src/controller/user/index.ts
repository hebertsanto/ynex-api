import userModel from "../../models/user";
import clientModel from '../../models';

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

export const getAllClientsUser = async (req: Request, res: Response) => {
    
  try {
    const usersClients = await clientModel.find({ user: req.params.id });
    res
      .json({
        msg: 'clintes de usuários',
        usersClients
      })
      .status(201);
  } catch (err) {
    return res.json({
      msg: "error",
      err,
    });
  }
};
