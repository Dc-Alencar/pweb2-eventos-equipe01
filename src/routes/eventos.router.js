import {Router} from 'express';
import {EventosController} from '../Controllers/eventos.controller.js';

const router = Router();
const eventosController = new EventosController();
router.get('/',eventosController.ListarEventos);
router.get('/:id',eventosController.BuscarEventoPorId);
router.post('/', eventosController.CriarEvento);
router.put('/:id', eventosController.AtualizarEvento);
router.delete('/:id', eventosController.DeletarEvento); 
router.post('/:id/inscricao',eventosController.ReduzirQuantidadeVagas);
router.patch('/:id/cancelar',eventosController.CancelarEvento)

export default router;