var fatiasPizza = 8
// var c = 1
function comerPizza() {
    
    for (var c = fatiasPizza; c > 1; c-- ) {
    console.log('Comendo')
    fatiasPizza -= 1
    console.log(`Ainda restam ${fatiasPizza} fatia(s) de pizza.`)
    }
    if (fatiasPizza == 1 ){
        console.log('Comendo a última fatia de pizza.')
        fatiasPizza = 0
        console.log('Estou satisfeito :3')
    }
}
/*
do {
    console.log(`Passo ${c}`)
    c++ 
} while(c <= 500)
while (fatiasPizza > 1) {
        console.log('Comendo...')
        fatiasPizza --
        console.log(`Ainda restam ${fatiasPizza} fatia(s) de pizza.`)
        
    }

*/
console.log(`A pizza tem ${fatiasPizza} fatias.`)
comerPizza()

