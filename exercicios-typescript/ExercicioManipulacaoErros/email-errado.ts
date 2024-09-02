export class EmailInvalido extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Email Inválido';
    }
}
