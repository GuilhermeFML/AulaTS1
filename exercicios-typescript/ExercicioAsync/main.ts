import { buscarDadosDaAPI } from './api';

async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();
        console.log(dados);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ocorreu um erro:', error.message);
        } else {
            console.error('Ocorreu um erro desconhecido:', error);
        }
    }
}

executarBusca();
