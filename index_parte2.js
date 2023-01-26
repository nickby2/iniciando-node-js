import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, "Aconteceu algum erro durante a compilação "));
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto.md');
