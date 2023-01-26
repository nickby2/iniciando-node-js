import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, "Aconteceu algum erro durante a compilação "));
}

function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        //console.log(chalk.green(texto));
    }).then((texto) => console.log(chalk.green(texto))).catch(trataErro);
}
pegaArquivo('./arquivos/texto.md');
