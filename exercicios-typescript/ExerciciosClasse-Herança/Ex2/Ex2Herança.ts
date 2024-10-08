class ContaBancaria {
    titular: string;
    saldo: number;
  
    constructor(titular: string, saldo: number) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    exibirSaldo(): void {
      console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    limiteCredito: number;
  
    constructor(titular: string, saldo: number, limiteCredito: number) {
      super(titular, saldo); 
      this.limiteCredito = limiteCredito;
    }
  
    exibirSaldo(): void {
      const saldoTotal = this.saldo + this.limiteCredito;
      console.log(`Saldo total disponível: R$${saldoTotal.toFixed(2)} (Saldo: R$${this.saldo.toFixed(2)} + Limite de Crédito: R$${this.limiteCredito.toFixed(2)})`);
    }
  }
  
  const contaBancaria = new ContaBancaria('X', 20000.00);
  contaBancaria.exibirSaldo();
  
  const contaCorrente = new ContaCorrente('Y', 10000.00, 5000.00);
  contaCorrente.exibirSaldo();
  