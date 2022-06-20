/*
* 10. Ejercicio 
Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
Ejemplo de uso de la función:



*/


//dentro de esta funcion 
let removeHTMLTags = (text)=>{
  //con esta expresion regular, borramos las etiquetas
  return text.replace(/<[^>]*>/g,' ');

}

console.log(removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>'))





