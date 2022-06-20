/*
* 1. Ejercicio 
Dado un array de objetos, obtener el objeto con el id 3
*/
const arrNames = [
  {id: 1, name: 'Pepe'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'Alba'},
  {id: 4, name: 'Toby'},
  {id: 5, name: 'Lala'}
]

//este es con find()
let ar = arrNames.find((i) =>{
    return i.id === 3
})

//este es con filtre()

let conf = arrNames.filter((i)=>{
    return i.id ===3
})



console.log(ar) 
console.log(conf)

