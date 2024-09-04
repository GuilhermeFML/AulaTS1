type Pessoa = {
    nome: string;
    idade: number;
  };
  
  type Empregado = {
    empresa: string;
    salario: number;
  };
  
  type PessoaEmpregado = Pessoa & Empregado;
  
  function descreverPessoaEmprego(pessoaEmpregado: PessoaEmpregado): string {
    return `Nome: ${pessoaEmpregado.nome}, Idade: ${pessoaEmpregado.idade} anos, Empresa: ${pessoaEmpregado.empresa}, Salário: R$${pessoaEmpregado.salario.toFixed(2)}`;
  }
  
  const pessoaEmpregada: PessoaEmpregado = {
    nome: 'Ana Silva',
    idade: 30,
    empresa: 'Tech Solutions',
    salario: 5500.00
  };
  
  console.log(descreverPessoaEmprego(pessoaEmpregada));
  