function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("[ERRO] Verifique o valor digitado acima e tente novamente!")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src','imagens/homemcrianca.png')
            }else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/homemjovem.png')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homemadulto.png')
            }else {
                //Idoso
                img.setAttribute('src', 'imagens/homemvelho.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src','imagens/mulhercrianca.png')
            }else if (idade < 21) {
                // Jovem
                img.setAttribute('src','imagens/mulherjovem.png')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src','imagens/mulheradulta.png')
            }else {
                //Idoso
                img.setAttribute('src','imagens/mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}