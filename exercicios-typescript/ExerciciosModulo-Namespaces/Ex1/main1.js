"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente1_1 = require("./cliente1");
const pedido1_1 = require("./pedido1");
const cliente = new cliente1_1.Cliente('Guilherme', 'a@b.com');
const pedido = new pedido1_1.Pedido(cliente, 'Celular', 3000.00);
pedido.exibirInformacoes();
