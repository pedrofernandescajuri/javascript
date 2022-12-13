function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var masc = document.getElementById('masc')
        var fem = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (masc.checked){
            gênero = 'Homem'
            if (idade <= 10) {
                //criança
                img.setAttribute('src', 'Imagens/Menino.jpg')
            }
            else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'Imagens/Adolescente-m.jpg')
            }
            else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'Imagens/Adulto.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'Imagens/Idoso.jpg')
            }
        } if(fem.checked) {
            gênero = 'Mulher'
            if (idade <= 10) {
                //criança
                img.setAttribute('src', 'Imagens/Menina.jpg')
            }
            else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'Imagens/Adolescente-f.jpg')
            }
            else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'Imagens/Adulta.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'Imagens/Idosa.jpg')
            }
        }
        res.style.textAlign = 'Center'
        res.innerText = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}