"use strict";
function descreverPessoaEmprego(pessoaEmpregado) {
    return `Nome: ${pessoaEmpregado.nome}, Idade: ${pessoaEmpregado.idade} anos, Empresa: ${pessoaEmpregado.empresa}, Salário: R$${pessoaEmpregado.salario.toFixed(2)}`;
}
const pessoaEmpregada = {
    nome: 'Ana Silva',
    idade: 30,
    empresa: 'Tech Solutions',
    salario: 5500.00
};
console.log(descreverPessoaEmprego(pessoaEmpregada));
