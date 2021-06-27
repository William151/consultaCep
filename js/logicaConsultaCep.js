import {apiBusca} from './apiBusca.js'

export let  objetoElementosHTML = () => {
    return {

        'entradaCep': window.document.getElementById('cepUsuario'),
        'botaoPesquisar': window.document.getElementById('botaoPesquisar'),
        'cepInfo' : window.document.getElementById('cepInfo'),
        'logradouro': window.document.getElementById("logradouro"),
        'complemento': window.document.getElementById('complemento'),
        'bairro': window.document.getElementById('bairro'),
        'localidade': window.document.getElementById('localidade'),
        'uf': window.document.getElementById('uf'),
        'DDD': window.document.getElementById('DDD')

    }
}


let validarEntrada = (entrada, elementoInformativo) => {
    let entradaSemEspacos = entrada.value.replace( /\s/g, '')
    console.log(entradaSemEspacos)
    if(!entradaSemEspacos|| window.isNaN(entradaSemEspacos) ){
        elementoInformativo.style.color = '#D49024'
        elementoInformativo.innerHTML = 'Digite apenas os números.'

    } else {

        if(entradaSemEspacos.length != 8 ){
            elementoInformativo.style.color = '#FA0D00'
            elementoInformativo.innerHTML = 'Oops ! CEP deve conter 8 digitos.'
        }else {
            elementoInformativo.style.color = '#1BFA1A'
            elementoInformativo.innerHTML = 'ótimo'
            apiBusca(entradaSemEspacos)
           
        }
    } 
}

let chamadaParaEvento = () => {
    let {entradaCep,  cepInfo} = objetoElementosHTML() // decompondo
        
        validarEntrada(entradaCep, cepInfo)
}

// eventos
objetoElementosHTML().entradaCep.addEventListener('keypress', (evento) => {
    if(evento.key == 'Enter'){
        chamadaParaEvento()
    }
})


objetoElementosHTML().botaoPesquisar.addEventListener('click', () =>{
    chamadaParaEvento()
})