export async function buscarDadosDaAPI(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve('Dados recebidos com sucesso!');
            } else {
                reject(new Error('Erro ao buscar dados da API.'));
            }
        }, 2000);
    });
}
