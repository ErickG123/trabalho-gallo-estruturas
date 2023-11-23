// Lista de Compras Interativa:
// • Crie uma lista para armazenar o nome de produtos.
// • Crie um método que permita que o usuário adicione itens à lista.
// • Implemente a funcionalidade de pesquisar e remover itens da lista.

class ListaDeCompras {
    constructor() {
        this.produtos = [];
    }

    adicionarItem(item) {
        this.produtos.push(item);
        console.log(`${item} foi adicionado à lista.`);
    }

    pesquisarItem(item) {
        const index = this.produtos.indexOf(item);
        if (index !== -1) {
            console.log(`${item} está na posição ${index + 1} da lista.`);
        } else {
            console.log(`${item} não foi encontrado na lista.`);
        }
    }

    removerItem(item) {
        const index = this.produtos.indexOf(item);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`${item} foi removido da lista.`);
        } else {
            console.log(`${item} não foi encontrado na lista.`);
        }
    }

    mostrarLista() {
        console.log("Lista de Compras:");
        this.produtos.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

const listaCompras = new ListaDeCompras();

listaCompras.adicionarItem("Maçãs");
listaCompras.adicionarItem("Bananas");
listaCompras.adicionarItem("Leite");

listaCompras.mostrarLista();

listaCompras.pesquisarItem("Bananas");

listaCompras.removerItem("Bananas");

listaCompras.mostrarLista();
