import { listar, 
    buscarPorId,
    novoEvento,
    atualizaEvento
} from '../Services/eventos.services.js';

export const ListarEventos = (req,res) => {
    const eventos = listar();
    res.status(200).json(eventos);
};

export const BuscarEventoPorId = (req, res) => {
    const buscaId = buscarPorId(req.params.id);
    res.status(200).json(buscaId);
};

export const criarEvento = (req, res) => {
    const criaEventos = novoEvento(req.body);
    res.status(201).json(criaEventos)
};

export const atualizarEvento = (req, res) => {
    const atualizaEventos = atualizaEvento(Number(req.params.id), req.body);
    res.status(201).json(atualizaEventos);
};
