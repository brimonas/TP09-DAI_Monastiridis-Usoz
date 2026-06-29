
import express from "express";
import cors from "cors";
import publicacionesRouter from "./src/controllers/publicaciones-controller.js";
import usuariosRouter from "./src/controllers/usuarios-controller.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); 
app.use("/api/publicaciones",publicacionesRouter);
app.use("/api/usuarios",usuariosRouter);

app.listen(port, () => {
    console.log(`"server" en (http://localhost:${port}/)`);
});