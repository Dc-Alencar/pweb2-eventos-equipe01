export class EventosDatabase {
  constructor() {
    this.eventos = [
      { titulo: "Workshop Node.js", descricao: "Dev Backend", vagas: 50, modalidade: "Presencial", cargaHoraria: 10, vagasDisponiveis:13,ativo:true,dataCriacao: new Date().toISOString()},
      { titulo: "Live de Python", descricao: "Data Science", vagas: 200, modalidade: "Online", cargaHoraria: 4, vagasDisponiveis:20,ativo:false,dataCriacao: new Date().toISOString() }
    ];
    this.proximoId = 1;
  }

  listarTodos() {
    return this.eventos;
  }

  buscarPorId(id) {
    return this.eventos.find(e => e.id === Number(id)) || null;
  }

  inserir(dados) {
    const novoEvento = {
      id: this.proximoId++,
      titulo: dados.titulo,
      descricao: dados.descricao,
      vagas: dados.vagas,
      vagasDisponiveis: dados.vagas,
      modalidade: dados.modalidade,
      cargaHoraria: dados.cargaHoraria,
      ativo: true,
      dataCriacao: new Date().toISOString()
    };

    this.eventos.push(novoEvento);
    return novoEvento;
  }

  atualizar(id, dadosAtualizados) {
    const index = this.eventos.findIndex(e => e.id === Number(id));
    if (index === -1) return null;

    this.eventos[index] = {
      ...this.eventos[index],
      ...dadosAtualizados,
      id
    };

    return this.eventos[index];
  }

  remover(id) {
    const index = this.eventos.findIndex(e => e.id === id);
    if (index === -1) return false;

    this.eventos.splice(index, 1);
    return true;
  }

  reduzirVaga(id) {
    const evento = this.buscarPorId(id);
    if (!evento || evento.vagasDisponiveis <= 0) return null;

    evento.vagasDisponiveis--;
    return evento;
  }
}
