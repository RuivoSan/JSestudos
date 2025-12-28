function calcular(){
    let fnum = document.getElementById('tnumber')
    

    if (fnum.value.length == 0) {
        window.alert('[Erro] Digite um número!')
    }else {
        let num = Number(fnum.value)
        let tab = document.getElementById('tabuada')
        tab.innerHTML = ""

        for (c=1;c<=10;c++) {
            tab.innerHTML += (`<option>${num} x ${c} = ${num * c}</option>`)
        }
    }
}