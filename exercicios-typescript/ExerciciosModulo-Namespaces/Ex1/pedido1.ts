import { Cliente } from './cliente1';

export class Pedido {
    cliente: Cliente;
    produto: string;
    valor: number;

    constructor(cliente: Cliente, produto: string, valor: number) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.cliente.nome}`);
        console.log(`Produto: ${this.produto}`);
        console.log(`Valor: R$${this.valor.toFixed(2)}`);
    }
}
