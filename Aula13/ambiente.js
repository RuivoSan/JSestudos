var fatiasPizza = 8
// var c = 1
function comerPizza() {
    while (fatiasPizza > 1) {
        console.log('Comendo...')
        fatiasPizza --
        console.log(`Ainda restam ${fatiasPizza} fatia(s) de pizza.`)
        
    }
    
}
/*
do {
    console.log(`Passo ${c}`)
    c++ 
} while(c <= 500)
*/
console.log(`A pizza tem ${fatiasPizza} fatias.`)
comerPizza()

