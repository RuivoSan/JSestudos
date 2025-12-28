function contar(){
    let fini = document.getElementById('txtini')
    let ffim = document.getElementById('txtfim')
    let fpas = document.getElementById('txtpas')
    let res = document.querySelector('div#res')

    res.innerHTML = ''

    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        res.innerHTML = "Impossível contar"
        
    }else {
        res.innerHTML = "Contando: <br>"
        let ini = Number(fini.value)
        let fim = Number(ffim.value)
        let pas = Number(fpas.value)
        if (pas == 0) {
            window.alert("Passo = 0 é inválido! Considerando Passo = 1")
            pas = 1
        }
        if (ini < fim) {
            for (var c = ini; c<=fim; c+=pas){
            res.innerHTML += `${c} &#x1F449`   
        }
        res.innerHTML += `&#x2705`
        }else {
            for (c=ini;c>=fim; c-=pas){
            res.innerHTML += `${c} &#x1F449`  
        }
        res.innerHTML += `&#x2705`
        }
        
    }
}