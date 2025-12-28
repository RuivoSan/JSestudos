let num = [5, 3, 6]
num.push(7)
num.sort()
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro indice tem o valor ${num[0]}`)

let pos = num.indexOf(10)
if (pos == -1){
    console.log('Esse valor não existe!')
}else{
    console.log(`o número 3 está na posição ${pos}`)
}