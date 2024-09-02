"use strict";
var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxa) {
        return valor * (taxa / 100);
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxa) {
        return valor * (taxa / 100);
    }
    Financeiro.calcularDesconto = calcularDesconto;
    class Orcamento {
        constructor(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        aplicarImposto(taxaImposto) {
            const imposto = calcularImposto(this.valorTotal, taxaImposto);
            this.valorTotal += imposto;
        }
        aplicarDesconto(taxaDesconto) {
            const desconto = calcularDesconto(this.valorTotal, taxaDesconto);
            this.valorTotal -= desconto;
        }
    }
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (Financeiro = {}));
