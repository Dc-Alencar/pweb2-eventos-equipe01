import {EventosDatabase} from "../Database/EventosDatabase.js";

const database = new EventosDatabase();
export function listar() {
    try {
        const listagem = database.listarTodos();
        return listagem;
    } catch (error) {
        console.error("Erro ao encontrar eventos: ", error)
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