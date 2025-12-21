var fatiasPizza = 8
function comerPizza() {
    while (fatiasPizza > 1) {
        console.log('Comendo...')
        fatiasPizza --
        console.log(`Ainda restam ${fatiasPizza} fatia(s) de pizza.`)
        
    }
    
}

console.log(`A pizza tem ${fatiasPizza} fatias.`)
comerPizza()
