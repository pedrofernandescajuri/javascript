var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Tenha um Bom dia')
}
else if (hora <18) {
    console.log('Tenha uma boa tarde')
}
else if (hora < 24) {
    console.log('Tenha uma boa noite')
}