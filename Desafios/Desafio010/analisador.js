let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    focus()
}
function fim(){
    if(valores.length == 0){
        window.alert('Digite um número')
    }else{
        let total = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        let maior = valores [0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores [pos] > maior){
                maior = valores[pos]
            }
            if(valores [pos] < menor){
                menor = valores[pos]
            }
        }
        média = soma / total
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores e ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é igual a ${média}</p>`
    }
}