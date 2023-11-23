// Menu de Navegação Hierárquico:
// • Crie uma estrutura em árvore que armazene um menu de navegação hierárquico de uma página web.
// • Cada nó deve possuir um nome, e apresentar sempre que tiver os nós filhos.

class NodoMenu {
    constructor(nome) {
        this.nome = nome;
        this.filhos = [];
    }

    adicionarFilho(filho) {
        this.filhos.push(filho);
    }

    exibirMenu() {
        console.log(this.nome);

        if (this.filhos.length > 0) {
            this.filhos.forEach((filho) => {
                filho.exibirMenu();
            });
        }
    }
}

const menuPrincipal = new NodoMenu("Menu Principal");

const submenu1 = new NodoMenu("Submenu 1");
submenu1.adicionarFilho(new NodoMenu("Item 1.1"));
submenu1.adicionarFilho(new NodoMenu("Item 1.2"));

const submenu2 = new NodoMenu("Submenu 2");
submenu2.adicionarFilho(new NodoMenu("Item 2.1"));
submenu2.adicionarFilho(new NodoMenu("Item 2.2"));

menuPrincipal.adicionarFilho(submenu1);
menuPrincipal.adicionarFilho(submenu2);

menuPrincipal.exibirMenu();
