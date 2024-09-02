export function medirTempoDeExecucao(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();

        console.log(`${String(propertyKey)} levou ${(fim - inicio).toFixed(2)}ms para executar.`);
        return resultado;
    };
}
