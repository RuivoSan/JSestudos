function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        img.src = 'manhaimg.png'
        document.body.style.background = '#6bbdf7'
    }else if (hora <= 18) {
        img.src = 'tardeimg.png'
        document.body.style.background = '#bb652fff'
    }else {
        img.src = 'noiteimg.png'
        document.body.style.background = '#303948'
    }

}




