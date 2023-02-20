import chalk from "chalk";

function extrairLinks(arrLinks){
    return arrLinks.map((ObjetoLink) => Object.values(ObjetoLink).join())
}

async function checaStatus(listaURLs){
    const arrStatus = await Promise.all(
        listaURLs.map( async (url) => {
            try {
                const response = await fetch(url);
                return `${response.status} - ${response.statusText}`;
            } catch (erro) {
                return manejaErro(erro);
            }
        })
    )
    return arrStatus;
}

function manejaErro(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado';
    } else{
        return 'Ocorreu algum error.';
    }
}

    export default async function listaValidada(listaDeLinks) {
    const links = extrairLinks(listaDeLinks);
    const status = await checaStatus(links);
    console.log(status);

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto, status: status[indice]
    }))

}