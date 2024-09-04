"use strict";
function informarCompra(produto, pagamento) {
    return `O produto ${produto.nome}, classificado como ${produto.categoria}, tem um custo de R$${produto.preco.toFixed(2)}. O pagamento será feito via ${pagamento}.`;
}
const meuProduto = {
    nome: 'Mouse',
    preco: 199.90,
    categoria: 'Periféricos'
};
const formaPagamento = 'cartão';
console.log(informarCompra(meuProduto, formaPagamento));
