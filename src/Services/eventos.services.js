import {EventosDatabase} from "../Database/EventosDatabase.js";

const database = new EventosDatabase();
export function Listar(filtros) {
    const todosEventos = database.listarTodos();
    if(!filtros){
        return todosEventos;
    }else if (filtros.ativo) {
        const estaAtivo = filtros.ativo === 'true';
        return todosEventos.filter(evento => evento.ativo === estaAtivo);
    }
};

export function buscarPorId(id) {
    try {
        const eventoPorId = database.buscarPorId(id);
        return eventoPorId;
    } catch (error) {
        console.error("Erro ao encontrar evento por ID: ", error);
    }
};

export function novoEvento(dados) {
    const inserirEvento = database.inserir(dados);
    return inserirEvento;
};

export function atualizaEvento(id, dados) {
    const atualizarEvento = database.atualizar(id, dados);
    return atualizarEvento;
};
