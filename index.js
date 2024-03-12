import fs from "fs";
import chalk from 'chalk';

// console.log(chalk.blue('Hello'));

// console.log(chalk.blue.bgWhite.bold("Senai"));

// console.log(chalk.blue('Curso', ' de', ' Node.js'));

// console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

// console.log(`
//     CPU: ${chalk.red('90%')}
//     RAM: ${chalk.green('40%')}
//     DISK: ${chalk.yellow('70%')}
// `);

// console.log('olá mundo');
// console.log('A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.');
// console.log('-')

//(2) tratamento de erros
function trataErro(erro){
    throw new Error(chalk.red(erro.code,"Não há arquivo no diretório"));
}

//(1) escrever uma function que traga arquivos  .md
function pegaArquivo(caminhoDoArquivo){
    const encoding="utf-8";
    fs.readFile(caminhoDoArquivo,encoding,(erro,texto)=>{
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.green(texto)); 
    })
}

pegaArquivo('./arquivos/texto.md');
//callback(erro,texto)

