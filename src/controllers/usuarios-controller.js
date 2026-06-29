import { Router } from "express";
import usuariosService from './../services/usuariosService.js';
import {ReasonPhrases, StatusCodes} from 'http-status-codes'

const router = Router();
const svc = new usuariosService();


router.get('/api/publicaciones', async (req, res) => {
const entidadArray = await svc.getAll();
return res.status(StatusCodes.OK).json(entidadArray);
}); 


router.post('/api/auth/register', async(req,res)) =>{

}

router.post('/api/auth/login', async(req,res)) =>{
    
}








export default router;