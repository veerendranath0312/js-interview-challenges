/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

// Using normal for loop
// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }

//     return sum;
// }

// Using reduce() method
function sumArray(arr) {
  const sum = arr.reduce((acc, current) => acc + current, 0);
  return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray(studentCount));
