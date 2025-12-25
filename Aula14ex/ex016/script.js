function contar(){
    var fini = document.getElementById('txtini')
    var ffim = document.getElementById('txtfim')
    var fpas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')

    res.innerHTML = ''

    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        res.innerHTML = "Impossível contar"
        
    }else if(txtpas.value == 0){
        window.alert('Passo = 0 Não pode ser aceito! Considerando Passo = 1')
        var ini = Number(fini.value)
        var fim = Number(ffim.value)
        for (var c = ini; c<=fim; c++){
            res.innerHTML += `${c} &#x1F449`   
        }
        res.innerHTML += `&#x2705`

    }else {
        var ini = Number(fini.value)
        var fim = Number(ffim.value)
        var pas = Number(fpas.value)
        for (c=ini;c<=fim;c=c+pas){
            res.innerHTML += `${c} &#x1F449`  
        }
        res.innerHTML += `&#x2705`
    }
}