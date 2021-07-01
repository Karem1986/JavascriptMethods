//Array function syntax for map:
let horses = [
    {name: 'geof',  height: 15},
    {name: 'gary', height: 14},
  ]

  //console.log(horses.map(horse => (horse.name)))
//Using the callback function syntax:
const names = horses.map(function(i) {
    return i.name
})
console.log(names)
// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
//map((element, index) => { ... } )
// let swapCase = function(string){
//   const newString = string.split(' ').map((word, index)=> {
// 		// console.log(word, index)
//     if(index === 0 || index == 2) { 
// 			// console.log({word})
//        return word.toUpperCase()
//     }
// 		return word
//   })
// return newString
// }
let swapCase = function(string){
  const newString = string.split(' ').map((word, index)=> {
		// console.log(word, index)
    if(index % 2) { //we make it to return every other word in upper case, as long as the index is remainder of 2(odd index number)
			// console.log({word})
       return word.toUpperCase()
    }
		return word
  })
return newString
}
console.log(swapCase('this is fun and lekker'))
