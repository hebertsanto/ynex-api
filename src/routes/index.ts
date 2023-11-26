import express from "express";
const router = express.Router();

import {
  createClientController,
  deleteClientController,
  getAClientController,
  getAllClientsController,
  updateClientController,
} from "../controller/colaborator/index";

import { CreateUser } from "../controller/admin/createUser";
import { getAllClientsUser } from "../controller/admin/getAllClintesUser";
import { Login } from "../auth/login/index.";
import { authMiddleware } from "../jwt/auth";

router.get("/colaborator", authMiddleware, getAllClientsController);
router.get("/colaborator/:id", authMiddleware, getAClientController);
router.post("/colaborator", authMiddleware, createClientController);
router.put("/colaborator/:id", authMiddleware, updateClientController);
router.delete("/colaborator/:id", authMiddleware, deleteClientController);
router.get("/admin/:id", authMiddleware, getAllClientsUser);
router.post("/admin", CreateUser);
router.post("/auth/login", Login);

export default router;
