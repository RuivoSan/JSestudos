function contar(){
    var fini = document.getElementById('txtini')
    var ffim = document.getElementById('txtfim')
    var fpas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')

    res.innerHTML = ``

    if (txtini.value.length == 0) {
        window.alert('[Erro] Verifique os valores inseridos e tente novamente')
        res.innerHTML = `Tente novamente`
    }else {
        var ini = Number(fini.value)
        var fim = Number(ffim.value)
        var pas = Number(fpas.value)
        for (var c = ini; c<=fim; c=c+pas){
            res.innerHTML += `${c} `
            
        }
        
    
    }
}