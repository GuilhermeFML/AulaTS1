"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const email_errado_1 = require("./email-errado");
const verificar_email_1 = require("./verificar-email");
function testarVerificacaoEmail(email) {
    try {
        (0, verificar_email_1.verificarEmail)(email);
        console.log('O email é válido.');
    }
    catch (error) {
        if (error instanceof email_errado_1.EmailInvalido) {
            console.error(`Erro: ${error.message}`);
        }
        else {
            console.error('Erro desconhecido:', error);
        }
    }
}
testarVerificacaoEmail('ab.com');
testarVerificacaoEmail('a@b.com');
