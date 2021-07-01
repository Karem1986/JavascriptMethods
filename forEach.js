//From https://learnjavascript.online/app.html?id=1493

//Returning from loop 

function logInUser(userIds) {
    userIds.forEach(function(userId){
       console.log(userId)
    })
    return true
}
function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId); //always use the cons log to visualize the change from 
        //array to array item. 
    });
    return true; // or is this the correct way?
}

// console.log(logUserIds([1, 2, 3, 4]))

// Complete the function sumGrades such that it returns
// the sum of all the grades it receives as a parameter:

function sumGrades(grades){
    let sum = 0
   grades.forEach(function(grade) {
        console.log(grade)
        sum = sum + grade
    })
return sum

}
// console.log(sumGrades([15, 5, 10]));

function sumPositiveNumbers(numbers){
    let negatives = []
    let sum = 0
   numbers.forEach(function(numbr) {
        // console.log(positives)
        //check to sum only positive numbers, so the negatives are not taken into account
        if(numbr < 0) {
            negatives.push(numbr)
        }else {
            sum += numbr
        }
       
    })
return sum

}
//console.log(sumPositiveNumbers([15, -5, 10])); 

//https://learnjavascript.online/app.html?id=1496 
function sumOddNumbers(numbers) {
    let sum = 0
numbers.forEach(function(number) {
    console.log(number)
if(number % 2) { //if the number can be divided by 2: 
 sum += number
}
})
return sum 
}
console.log(sumOddNumbers([15, 5, 10])); // 20