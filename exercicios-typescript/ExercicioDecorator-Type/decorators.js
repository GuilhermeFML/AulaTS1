"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medirTempoDeExecucao = medirTempoDeExecucao;
function medirTempoDeExecucao(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();
        console.log(`${String(propertyKey)} levou ${(fim - inicio).toFixed(2)}ms para executar.`);
        return resultado;
    };
}
