/* 
7. Ejercicio 
Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:

-Primer parámetro es un objeto con x número de campos y valores
-Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

*/

let returnFalsyValues = (obj,fn)=>{
  const mapResult = Object.keys(obj).map(ke =>{
  	const va = obj[ke];
 		console.log(ke,'=>', va)
		if(typeof va !=='string'){
    	
    	console.log(va)
  	}
	});
  
  return fn(obj);
}



console.log(returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string'))



