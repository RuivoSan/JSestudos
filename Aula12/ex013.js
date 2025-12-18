var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo / Sunday
    1 = Segunda / Monday
    2 = Terça / Tuesday
    3 = Quarta / Wednesday
    4 = Quinta / Thursday
    5 = Sexta / Friday
    6 = Sábado / Saturday
*/
// mostrar dia da semana em if e else
console.log('Condição Aninhada:')    
if (diaSem == 0) {
    console.log("Hoje é Domingo | Today is Sunday")

}else if (diaSem == 1) {
    console.log('Hoje é Segunda-feira | Today is Monday')

}else if (diaSem == 2) {
    console.log('Hoje é Terça-feira | Today is Tuesday')

}else if (diaSem == 3) {
    console.log('Hoje é Quarta-feira | Today is Wednesday')

}else if (diaSem == 4) {
    console.log('Hoje é Quinta-feira | Today is Thursday')

}else if (diaSem == 5) {
    console.log('Hoje é Sexta-feira | Today is Friday')

}else {
    console.log('Hoje é Sábado | Today is Saturday')

}
console.log('')
console.log('Condição Multipla:')
// Usando switch
switch (diaSem) {
    case 0:
        console.log("Hoje é Domingo | Today is Sunday")
        break
    case 1:
        console.log('Hoje é Segunda-feira | Today is Monday')
        break
    case 2:
        console.log('Hoje é Terça-feira | Today is Tuesday')
        break
    case 3:
        console.log('Hoje é Quarta-feira | Today is Wednesday')
        break
    case 4:
        console.log('Hoje é Quinta-feira | Today is Thursday')
        break
    case 5:
        console.log('Hoje é Sexta-feira | Today is Friday')
        break
    case 6:
        console.log('Hoje é Sábado | Today is Saturday')
        break
    default:
        console.log('[ERRO] Dia da semana inválido ou indisponível')
        break
}