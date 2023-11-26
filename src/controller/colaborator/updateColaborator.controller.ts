import clientModel from "../../models/colaborator";
import { Request, Response } from "express";

export const updateClientController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const edit = await clientModel.findByIdAndUpdate(id, req.body);

    if (!edit) {
      return res.json({
        msg: "something went wrong",
      });
    }

    return res
      .json({
        msg: "edit successfully",
      })
      .status(201);
  } catch (error) {
    return res
      .json({
        msg: "some error occured",
        error,
      })
      .status(400);
  }
};
