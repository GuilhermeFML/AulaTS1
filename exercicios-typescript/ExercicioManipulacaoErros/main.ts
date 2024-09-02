// main.ts
import { EmailInvalido } from './email-errado';
import { verificarEmail } from './verificar-email';

function testarVerificacaoEmail(email: string) {
    try {
        verificarEmail(email);
        console.log('O email é válido.');
    } catch (error) {
        if (error instanceof EmailInvalido) {
            console.error(`Erro: ${error.message}`);
        } else {
            console.error('Erro desconhecido:', error);
        }
    }
}

testarVerificacaoEmail('ab.com');

testarVerificacaoEmail('a@b.com'); 
