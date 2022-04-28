//PARAMETRO REST
function suma(a,b){

    return a+b
}
//alert(suma(1,2,3,4,5,7,7))
function sumaAll(...args){
let suma=""

for (let arg of args) suma+=arg
    
return suma

}

function ShowName(firstName, LastName, ...info){

    alert(firstName+ " "+ LastName)
for (const iterator of info) {
   alert(iterator ) 
}
}


function sumar4Numeros(a,b,c,d){

    return a+b+c+d


}
//OPERADOR SPREAD

let arreglo=[3,5,1,9,6]
let string="hola"
alert(Array.from(str))
alert([...string])

//alert(Math.max(...arreglo,...arreglo2,numero2, numero3))

alert(sumar4Numeros(...string))




