import clientModel from "../../models";
import { Request, Response } from "express";

export const getAClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const client = await clientModel.findById(id);
    res.json({
      msg: "a client here",
      client,
    });
  } catch (error) {
    res
      .json({
        msg: "some error occured",
      })
      .status(400);
  }
};
