function clicou() {
    var n1 = document.getElementById('in1')
    var n2 = document.getElementById('in2')
    var n3 = document.getElementById('in3')
    var res = document.getElementById('ires')
    var nn1 = Number(n1.value)
    var nn2 = Number(n2.value)
    var nn3 = Number(n3.value)
    var soma = nn1 + nn3
    while(soma < nn2){
        soma
        res.innerHTML = (`> ${soma}`)
    }
}