/*
* 2. Ejercicio 
Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
*/

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

//version 1 
function istruthy(arrDirty){
var arraNew=[]
  arrDirty.forEach((va)=>{
    if(va){
      arraNew.push(va)
    }
    
  })
  return arraNew;
  
}
console.log('----un version 1----')
console.log(istruthy(arrDirty))



//version 2
const truly = arrDirty.filter(element => element)

console.log('----un version 2----')
console.log(truly)

