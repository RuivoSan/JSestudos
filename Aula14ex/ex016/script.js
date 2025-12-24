function contar(){
    var txtini = document.querySelector('input#txtini')
    var txtfim = document.querySelector('input#txtfim')
    var txtpas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')

    res.innerHTML = ''
    window.alert(`${ini}`)

    if (txtini.value == '') {
        window.alert('[Erro] Verifique os valores inseridos e tente novamente')
    }else {
        var ini = Number(txtini.value)
        var fim = Number(txtfim.value)
        var pas = Number(txtpas.value)
        for (c=ini;c<=fim;c=c+pas){
            res.innerHTML += `${c} `
        }
        
    
    }
}