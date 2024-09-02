/// <reference path="financeiro2.ts" />

const orcamento = new Financeiro.Orcamento(1000, ['Item 1', 'Item 2']);

console.log(`Valor Inicial: R$${orcamento.valorTotal.toFixed(2)}`);

orcamento.aplicarImposto(20);

console.log(`Valor Após Imposto: R$${orcamento.valorTotal.toFixed(2)}`);

orcamento.aplicarDesconto(5);

console.log(`Valor Após Desconto: R$${orcamento.valorTotal.toFixed(2)}`);
