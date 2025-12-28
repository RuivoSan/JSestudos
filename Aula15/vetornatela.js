let valores = [6,3,2,1,9]

valores.sort()
console.log(valores)
/*
for(var pos=0;pos<valores.length;pos++){
    console.log(`O valor da posição ${pos} é ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(valores[pos])
}
