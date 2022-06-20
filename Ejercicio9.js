/*
* 9. Ejercicio 
Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.

La función debe tener un objeto como único parámetro.

*/


let toLowerCaseKeys = (obj)=>{
  let object = {}
  for(let i in obj){
    object[i.toLowerCase()] = obj[i]
  }
  
  return object;
  
  
}

 console.log(toLowerCaseKeys({ NamE: 'Charles', ADDress: 'Home Street' }));





