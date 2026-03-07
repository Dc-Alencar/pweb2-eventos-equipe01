import {Router} from 'express';
import {
    ListarEventos,
    BuscarEventoPorId,
    criarEvento,
    atualizarEvento
} from '../Controllers/eventos.controller.js';

const router = Router();
router.get('/',ListarEventos);
router.get('/:id',BuscarEventoPorId);
router.post('/', criarEvento);
router.put('/:id', atualizarEvento);

export default router;