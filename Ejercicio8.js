/*
* 8. Ejercicio 
Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.


*/


//dentro de esta funcion 
let fromBytesToFormattedSizeUnits = (bytes, digits)=>{
  let operation =Math.floor(Math.log(bytes) / Math.log(1000));
  let sizes = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  return (bytes / Math.pow(1024,operation)).toPrecision(digits) * 1 + ' ' + sizes[operation];

}

console.log(fromBytesToFormattedSizeUnits(1000,1))







// console.log(roundedResult(1.123456789, 6)); 
//const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')



