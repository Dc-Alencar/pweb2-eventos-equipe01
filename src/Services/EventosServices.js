import {EventosDatabase} from "../Database/EventosDatabase.js";


export function listarEventos() {
    try {
        const listagem = EventosDatabase.listarTodos()
    } catch (error) {
        console.error("Erro ao encontrar eventos: ", error)
    }
};