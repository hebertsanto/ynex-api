import express from "express";
import {
  addClient,
  deleteClient,
  editClient,
  getAllClients,
} from "../controller/clients";

const router = express.Router();

router.get("/", getAllClients);
router.post("/", addClient);
router.put("/:id", editClient);
router.delete("/:id", deleteClient);

export default router;
