
var idade = 67
if (idade < 16) {
    console.log(`Com ${idade} anos não pode votar.`)

}else if (idade < 18 || (idade > 65)) {    
    console.log(`Com ${idade} anos o voto é opcional.`)
}else {
    console.log(`Com ${idade} anos o voto é obrigatório.`)
}
/*
var idade = 67
if (idade < 16) {
    console.log(`Com ${idade} anos não pode votar.`)

}else if (idade < 18) {    
    console.log(`Com ${idade} anos o voto é opcional.`)

}else if (idade < 67){
    console.log(`Com ${idade} anos o voto é obrigatório.`)

}else {
    console.log(`Com ${idade} anos o voto volta a ser opcional.`)

} feito por mim por cima da aula, deixei documentado para comparar a ultima parte.
*/