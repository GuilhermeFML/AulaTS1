import { EmailInvalido } from './email-errado';

export function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalido('Email inválido, necessário conter @');
    }

}
