import clientModel from "../../models/clients";
import { Request, Response } from "express";

export const getAClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const client = await clientModel.findById(id);
    return res.json({
      msg: "a client here",
      client,
    });
  } catch (error) {
    return res
      .json({
        msg: "some error occured",
      })
      .status(400);
  }
};
