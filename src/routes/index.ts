import express from "express";
import {
  addClient,
  deleteClient,
  editClient,
  getAClient,
  getAllClients,
} from "../controller/clients";

const router = express.Router();

router.get("/clients", getAllClients);
router.get("/client/:id", getAClient);
router.post("/clients", addClient);
router.put("/client/:id", editClient);
router.delete("/client/:id", deleteClient);

export default router;
