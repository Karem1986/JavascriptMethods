//Difference filter vs  find
let numbers = [9, 5, 14, 3, 11];

// filter() ALWAYS returns an array (even if it's empty)
numbers.filter(function(number) {
    return number >= 15;
}); // []

// .find() returns the first match or undefined (when none of the items satisfy the condition)
numbers.find(function(number) {
    return number >= 15;
}); // undefined

function getYear(years, searchYear) {
    return years.find(function(year) {
        return year === searchYear
    })
    
    }
    
    // console.log(getYear([2019, 2020, 2021], 2020)); 

function getCatColors(colors, catColor) {
   return colors.find(function(color){
       return color === catColor //returns the catColor when it is found in the array
   })
}

console.log(getCatColors(["red", "yellow", "blue"], "yellow")); 

function getOddYears(years) { 
    //Returns all the years that are odd from the years parameter
return years.filter(function(yearOdd) {
    if(yearOdd % 2) {
        return yearOdd //because you're expecting an array containing 0 or more years.
    }
})
}
