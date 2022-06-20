/*
* 5. Ejercicio 
Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
*/
const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

// aqui creamo el nuevo array, filtrando unos datos
const nuevoArrays = arrCities2.filter((e)=>{
  if(e.capital===false ){
    return e
  }
//con map creamos nuevos datos filtrados por el if
}).map(element=> {
  //creamos esta variable para poder 
  let country = (element.country ==='Spain');
	return {
    city: element.city,
		isSpain: country
    
  }
})


console.log(nuevoArrays) 

