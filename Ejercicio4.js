/*
* 4. Ejercicio 
Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
*/
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];
//aqui guardamos los duplicados 
var result = [];

    result = arrNumber1.filter(e => 
        arrNumber2.includes(e) && 
        arrNumber3.includes(e));




console.log(result)



