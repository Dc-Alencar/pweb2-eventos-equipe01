import {EventosDatabase} from "../Database/EventosDatabase.js";
import { AppError } from "../utils/AppError.js";
import {ValidadorCriacaoEvento} from '../utils/ValidadorCriacaoEvento.js'

const database = new EventosDatabase();

export class EventosService{
    
    Listar(filtros) {
        let eventos = database.listarTodos(); 

        if (filtros.ativo !== undefined) {
            if (filtros.ativo !== 'true' && filtros.ativo !== 'false') {
                throw new AppError('Filtro de status inválido.',400);
            }
            const estaAtivo = filtros.ativo === 'true';
            eventos = eventos.filter(e => e.ativo === estaAtivo);
        };

        if (filtros.modalidade) {
             if (filtros.modalidade !== 'presencial' && filtros.modalidade !== 'remoto' && filtros.modalidade !== 'hibrido') {
                throw new AppError('Filtro de status modalidade inválido.',400);
            }
            eventos = eventos.filter(e => e.modalidade === filtros.modalidade);
        };

        if (filtros.vagasMin !== undefined) {
            const min = Number(filtros.vagasMin);
            if(!isNaN(min)){
                eventos = eventos.filter(e => e.vagasDisponiveis >= min);
            };
        }
        return eventos;
    };
    
    BuscarPorId(id) {
        this.ValidarId(id);
        const idNumerico = Number(id);
        const eventoPorId = database.buscarPorId(idNumerico);
        if (eventoPorId == null) {
            throw new AppError('Evento não encontrado.',404);
        };
        return eventoPorId;
    };
    
    NovoEvento(dados) {
        const validadorCriarEventos = new ValidadorCriacaoEvento(dados);
        validadorCriarEventos.Validar();
        const inserirEvento = database.inserir(dados);
        return inserirEvento;
    };
    
    AtualizaEvento(id, dados) {
        const eventoAAtualizar = this.BuscarPorId(id);
        const atualizarEvento = database.atualizar(id, dados);
        return atualizarEvento;
    };

    removerEvento(id) {
        const eventoADeletar = this.BuscarPorId(id);
        const idNumerico = Number(id);
        database.remover(idNumerico);
    };

    ReduzirVagasEvento(id){
        const eventoAReduzirVagas = this.BuscarPorId(id);
        const idNumerico = Number(id);
        const eventoVagasAtualizadas = database.reduzirVaga(idNumerico);
        return eventoVagasAtualizadas;
    }

    CancelarEvento(id){
        const eventoParaAlterar = this.BuscarPorId(id);
        eventoParaAlterar.ativo = false;
        return eventoParaAlterar;
    }

    ValidarId(id){
        if (!id || isNaN(id) || id < 0) {
            throw new AppError('Id inválido.',400);
        };
    }
}