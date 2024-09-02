import { Cliente } from './cliente1';
import { Pedido } from './pedido1';

const cliente = new Cliente('Guilherme', 'a@b.com');
const pedido = new Pedido(cliente, 'Celular', 3000.00);
pedido.exibirInformacoes();
