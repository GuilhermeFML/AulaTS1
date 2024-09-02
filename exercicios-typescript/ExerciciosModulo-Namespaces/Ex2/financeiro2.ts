namespace Financeiro {

    export function calcularImposto(valor: number, taxa: number): number {
        return valor * (taxa / 100);
    }

    export function calcularDesconto(valor: number, taxa: number): number {
        return valor * (taxa / 100);
    }

    export class Orcamento {
        valorTotal: number;
        itens: string[];

        constructor(valorTotal: number, itens: string[]) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }

        aplicarImposto(taxaImposto: number): void {
            const imposto = calcularImposto(this.valorTotal, taxaImposto);
            this.valorTotal += imposto;
        }

        aplicarDesconto(taxaDesconto: number): void {
            const desconto = calcularDesconto(this.valorTotal, taxaDesconto);
            this.valorTotal -= desconto;
        }
    }
}
