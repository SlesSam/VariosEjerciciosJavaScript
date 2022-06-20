/*
* 10. Ejercicio 
Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
Ejemplo de uso de la función:



*/


//dentro de esta funcion 
let removeHTMLTags = (text)=>{
  
  return text.replace(/<[^>]*>/g,' ');
  

}

console.log(removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>'))







// console.log(roundedResult(1.123456789, 6)); 
//const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')



