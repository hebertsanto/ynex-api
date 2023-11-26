import clientModel from "../../models/colaborator";
import { Request, Response } from "express";

export const createClientController = async (req: Request, res: Response) => {

  const { name, email, cep, rg,user,cpf, address, phoneNumber } = req.body;

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
    cpf,
    rg,
    user,
  });
  
  return res
    .json({
      msg: "add client successfully",
      createClient,
    })
    .status(201);

};
