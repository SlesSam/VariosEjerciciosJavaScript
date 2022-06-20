/*
* 6. Ejercicio 
Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros:

-Primer parámetro es un número float con x decimales
-Según parámetro es un int que indique el número de decimales al que redondear

*/

//aqui creamos una funcion callback para que nos retorne un decimal a entero pero con limitacion
let roundedResult = (decimal, delimitarEntero) =>{
  return Number(Math.round(decimal + 'e' + delimitarEntero) + 'e-' + delimitarEntero);
}


console.log(roundedResult(2.123, 2));
console.log(roundedResult(1.123456789, 6));



