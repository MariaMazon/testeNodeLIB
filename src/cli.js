// Coman Line interfase (cli)

import pegaArquivo from "./index.js";

// (1) criar uma variavel para recepcionar  caminho via terminal 
const caminho=process.argv;
console.log(caminho);

pegaArquivo(caminho[2]);