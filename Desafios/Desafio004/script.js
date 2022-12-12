function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'Imagens/Manhã.jpg'
        document.body.style.background = '#ffd9bc'

    }
    else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'Imagens/Tarde.jpg'
        document.body.style.background = '#dc9157'
    }
    else {
        //boa noite
        img.src = 'Imagens/Noite.jpg'
        document.body.style.background = '#704d01'
    }  
}