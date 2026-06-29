import { Router } from "express";
import publicacionesService from './../services/publicacionesService.js';
import {ReasonPhrases, StatusCodes} from 'http-status-codes'

const router = Router();
const svc = new publicacionesService();


router.get('', async (req, res) => {
const entidadArray = await svc.getAll();
return res.status(StatusCodes.OK).json(entidadArray);
}); 
router.put('/:id', async (req, res) => {
let id = req.params.id;
let entidad = req.body;
const registrosAfectados = await svc.update(id, entidad);
return res.status(StatusCodes.OK).json(registrosAfectados); 
});
export default router;