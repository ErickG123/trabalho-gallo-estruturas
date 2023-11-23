// Fila de Atendimento ao Cliente:
// • Crie uma fila para simular um sistema de atendimento ao cliente.
// • Implemente a funcionalidade de adicionar novas solicitações dos clientes a fila.
// • Implemente a funcionalidade de atendimento, removendo solicitações da fila.

class FilaAtendimento {
    constructor() {
        this.fila = [];
    }

    adicionarSolicitacao(solicitacao) {
        this.fila.push(solicitacao);
        console.log(`Nova solicitação adicionada: ${solicitacao}`);
    }

    atenderProximaSolicitacao() {
        if (this.fila.length > 0) {
            const solicitacaoAtendida = this.fila.shift();
            console.log(`Solicitação atendida: ${solicitacaoAtendida}`);
        } else {
            console.log("Não há solicitações pendentes.");
        }
    }

    exibirFila() {
        console.log("Fila de Atendimento:");
        this.fila.forEach((solicitacao, index) => {
            console.log(`${index + 1}. ${solicitacao}`);
        });
    }
}

const filaAtendimento = new FilaAtendimento();

filaAtendimento.adicionarSolicitacao("Consulta de Saldo");
filaAtendimento.adicionarSolicitacao("Atualização de Cadastro");
filaAtendimento.adicionarSolicitacao("Reclamação");

filaAtendimento.exibirFila();

filaAtendimento.atenderProximaSolicitacao();

filaAtendimento.exibirFila();
