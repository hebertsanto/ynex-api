import express from "express";
const router = express.Router();
import { getAllClientsController } from "../controller/colaborator/getAllColaborator.controller";
import { getAClientController } from "../controller/colaborator/getColaborator.controller";
import { createClientController } from "../controller/colaborator/createColaborator.controller";
import { updateClientController } from "../controller/colaborator/updateColaborator.controller";
import { deleteClientController } from "../controller/colaborator/deleteColaborator.controller";
import { CreateUser } from "../controller/admin/createUser";
import { getAllClientsUser } from "../controller/admin/getAllClintesUser";
import { Login } from "../auth/login/index.";
import { authMiddleware } from "../jwt/auth";

router.get("/clients", authMiddleware, getAllClientsController);
router.get("/client/:id", authMiddleware, getAClientController);
router.post("/clients", authMiddleware, createClientController);
router.put("/client/:id", authMiddleware, updateClientController);
router.delete("/client/:id", authMiddleware, deleteClientController);
router.get("/user/:id", authMiddleware, getAllClientsUser);
router.post("/user", CreateUser);
router.post("/login", Login);

export default router;
