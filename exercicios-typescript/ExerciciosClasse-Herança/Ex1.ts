class Funcionario {
    nome: string;
    cargo: string;
    salario: number;
  
    constructor(nome: string, cargo: string, salario: number) {
      this.nome = nome;
      this.cargo = cargo;
      this.salario = salario;
    }
  
    descricao(): string {
      return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
  }
  
  class Gerente extends Funcionario {
    departamento: string;
  
    constructor(nome: string, cargo: string, salario: number, departamento: string) {
      super(nome, cargo, salario); 
      this.departamento = departamento;
    }
  
    descricaoDetalhada(): string {
      return `${this.descricao()}, Departamento: ${this.departamento}`;
    }
  }
  
  const funcionario = new Funcionario('X', 'Estágiario', 1100.00);
  console.log(funcionario.descricao());
  
  const gerente = new Gerente('Y', 'Gerente', 4000.00, 'TI');
  console.log(gerente.descricaoDetalhada());
  