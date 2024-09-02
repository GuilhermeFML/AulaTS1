"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarEmail = verificarEmail;
const email_errado_1 = require("./email-errado");
function verificarEmail(email) {
    if (!email.includes('@')) {
        throw new email_errado_1.EmailInvalido('Email inválido, necessário conter @');
    }
}
