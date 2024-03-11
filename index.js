import chalk from 'chalk';

console.log(chalk.blue('Hello'));

console.log(chalk.blue.bgWhite.bold("Senai"));

console.log(chalk.blue('Curso', ' de', ' Node.js'));

console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
`);

console.log('olá mundo');
console.log('A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.');
console.log('-')



