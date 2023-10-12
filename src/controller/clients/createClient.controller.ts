import clientModel from "../../models";
import { Request, Response } from "express";

export const createClientController = async (req: Request, res: Response) => {
  const { name, email, cep, user,address, phoneNumber } = req.body;

  const emailAlreadyExists = await clientModel.findOne({ email });

  if (emailAlreadyExists) {
    return res
      .json({
        msg: "email already exists",
      })
      .status(401);
  }

  const createClient = await clientModel.create({
    name,
    email,
    cep,
    address,
    phoneNumber,
    user
  });
  res
    .json({
      msg: "add client successfully",
      createClient,
    })
    .status(201);

  try {
  } catch (error) {
    return res
      .json({
        msg: "some error occured",
      })
      .status(400);
  }
};
