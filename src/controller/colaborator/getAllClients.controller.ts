import clientModel from "../../models/colaborator";
import { Request, Response } from "express";

export const getAllClientsController = async (req: Request, res: Response) => {
  try {
    const clients = await clientModel.find();
   return res.json({
      msg: "all clients here",
      clients,
    });
  } catch (error) {
     return error;
  }
};
