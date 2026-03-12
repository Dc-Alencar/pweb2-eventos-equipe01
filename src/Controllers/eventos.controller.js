import { EventosService} from '../Services/eventos.services.js';

const eventosService = new EventosService();

export class EventosController{

    ListarEventos = (req,res, next) => {
        try {
            const eventos = eventosService.Listar(req.query);
            res.json(eventos);
        } catch (error) {
            next(error);
        };
    };

    BuscarEventoPorId = (req, res, next) => {
        try {
            const {id} = req.params;
            const buscaId = eventosService.BuscarPorId(id);
            res.status(200).json(buscaId);
        } catch (error) {
            next(error);
        };
    };
    
    CriarEvento = (req, res, next) => {
        try {
            const novoEvento = req.body;
            const eventoCriado = eventosService.NovoEvento(novoEvento);
            res.status(201).json(eventoCriado);
        } catch (error) {
            next(error);
        }
    };
    
    AtualizarEvento = (req, res, next) => {
        try {
            const {id} = req.params;
            const eventoAtualizado = eventosService.AtualizaEvento(id, req.body);
            res.status(200).json(eventoAtualizado);
        } catch (error) {
            next(error);
        }
    };
    
    DeletarEvento = (req, res, next) => {
        try {
            const {id} = req.params;
            eventosService.RemoverEvento(id);
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    ReduzirQuantidadeVagas = (req,res,next) => {
        try {
            const {id} = req.params;
            const eventoAtualizado = eventosService.ReduzirVagasEvento(id);
            return res.status(201).json(eventoAtualizado);
        } catch (error) {
            next(error);
        };
    };

    CancelarEvento = (req,res,next) => {
        try {
            const {id} = req.params;
            const eventoAtualizado = eventosService.CancelarEvento(id);
            return res.status(200).json(eventoAtualizado);
        } catch (error) {
            next(error);
        }
    }
}

