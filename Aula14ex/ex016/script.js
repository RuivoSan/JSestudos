function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Erro falta numero')
    }else {
        res.innerHTML = ''
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        
        // Contagem crescente
        if (i < f) {
            for (let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else { // Contagem decrescente
            for (let c=i;c>=f;c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{2705}`
    }
}