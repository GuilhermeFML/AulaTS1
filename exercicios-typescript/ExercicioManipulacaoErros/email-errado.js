"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInvalido = void 0;
class EmailInvalido extends Error {
    constructor(message) {
        super(message);
        this.name = 'Email Inválido';
    }
}
exports.EmailInvalido = EmailInvalido;
