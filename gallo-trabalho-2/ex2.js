// Histórico de Navegação Simples:
// • Utilize uma pilha para armazenar o histórico de navegação de um usuário.
// • Implemente os métodos de empilhar e desempilhar os endereços acessados.

class HistoricoNavegacao {
    constructor() {
        this.pilha = [];
    }

    empilhar(endereco) {
        this.pilha.push(endereco);
        console.log(`Navegando para: ${endereco}`);
    }

    desempilhar() {
        if (this.pilha.length > 0) {
            const enderecoAnterior = this.pilha.pop();
            console.log(`Retornando para: ${enderecoAnterior}`);
        } else {
            console.log("Histórico de navegação vazio.");
        }
    }

    exibirHistorico() {
        console.log("Histórico de Navegação:");
        this.pilha.forEach((endereco, index) => {
            console.log(`${index + 1}. ${endereco}`);
        });
    }
}

const historico = new HistoricoNavegacao();

historico.empilhar("Página Inicial");
historico.empilhar("Produtos");
historico.empilhar("Carrinho de Compras");

historico.exibirHistorico();

historico.desempilhar();

historico.exibirHistorico();
