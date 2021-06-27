import { objetoElementosHTML } from "./logicaConsultaCep.js"

export let tratamentoApi  = (params) => {
    console.log(params)
    let {logradouro, complemento,bairro,  localidade,uf, DDD, cepInfo} = objetoElementosHTML()
    if (params.erro == true){
      cepInfo.innerHTML = 'o cep informado não existe.'
      cepInfo.style.color = '#DECD87'
    } else{
      logradouro.innerHTML = `logradouro: ${params.logradouro}`
      complemento.innerHTML = `complemento:  ${params.complemento}` 
      bairro.innerHTML = `bairro: ${params.bairro}`
      localidade.innerHTML = `localidade: ${ params.localidade}`
      uf.innerHTML = `uf: ${params.uf}` 
      DDD.innerHTML = `ddd: ${params.ddd}`
    }
   
}

 export let apiBusca = (cep) => {
    
    let apiUrl = 'https://viacep.com.br/ws/'+cep+'/json/'
    
    let requesicao = new XMLHttpRequest();
    requesicao.open('GET', apiUrl)
    requesicao.onload = () => {
      tratamentoApi(JSON.parse(requesicao.responseText)) // envia um objeto com os elementos da requisição : bairro, longradouro etc...
    }
    requesicao.send()
    
    
}