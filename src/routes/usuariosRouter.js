import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import usuariosController from "../controllers/usuarios-controller.js";

const router = express.Router();

router.get(
    "/perfil",
    authMiddleware,
    usuariosController.obtenerPerfil
);

router.put(
    "/perfil",
    authMiddleware,
    usuariosController.actualizarPerfil
);

export default router;