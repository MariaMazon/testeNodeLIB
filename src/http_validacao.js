function extraiLinks(arrLinks){
    return arrLinks.map((objetoLink)=>Object.values(objetoLink).join());

    }

// criaar uma função listaValidada
export default function listaValidada(listaDeLinks){
    return extraiLinks(listaDeLinks);
}