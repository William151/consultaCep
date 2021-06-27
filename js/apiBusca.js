

export let apiBusca = (cep) => {
    
    let apiUrl = 'https://viacep.com.br/ws/'+cep+'/json/'

    let requesicao = new XMLHttpRequest();
    requesicao.open('GET', apiUrl)
    requesicao.onload = () => {
        let objetoJsCep =  JSON.parse(requesicao.responseText)
        ///////////////////////////////////
        console.log(objetoJsCep.logradouro)
    }
    requesicao.send()
    
}