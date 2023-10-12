import clientModel from "../../models/clients";
import { Request, Response } from "express";

export const getAllClientsController = async (req: Request, res: Response) => {
  try {
    const clients = await clientModel.find();
    res.json({
      msg: "all clients here",
      clients,
    });
  } catch (error) {
    res
      .json({
        msg: "some error occured",
      })
      .status(400);
  }
};
