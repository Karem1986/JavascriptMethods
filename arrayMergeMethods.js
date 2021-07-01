//example with push and 2 parameters:
// function mergeArray(fromArray, toArray) {
//       for(let i = 0, len = fromArray.length; i < len; i++) {
//              toArray.push(fromArray[i]);
//       }
//        return toArray;
//  }
 
//  var array1 = [1,2,3,4,5];
//  var array2= [6,7,8,9,10];
//  var array3 = [];
// mergeArray(array1, array3);
//  console.log(mergeArray(array2, array3));

// let array1 = [1,2,3,4,5]
// let array2= [6,7,8,9,10]
// let newArray = [] //to push all items here
// //Goal: print all of them in one array 
// function oneParam(number) {
// array1.push(number)
// array2.push(number)
// }

// console.log(oneParam(array1, newArray))
let horses = [
      {name: 'geof',  height: 15},
      {name: 'gary', height: 14},
    ]
    
    function addHorse(horse) {
      // this will push our horse object into the array
      horses.push(horse)
      return horses
    }
    
    let beauty = {name: 'beauty', height: 16};
console.log(addHorse(beauty))
