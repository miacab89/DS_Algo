// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1 - Iterative

function steps(n) {
      for (let row = 0; row < n; row++) {
          let stair = '';

          for (let column = 0; column < n; column++) {
              if (column <= row) {
                stair += '#';
                } else {
                stair += ' '; 
              }
          }
        console.log(stair)
      }
}

// Solution 2 - Recursion 

 



// function printNumber (n) { 
//   if (n === 0) { 
//     return; 
//   } 
//   console.log(n); 
//   printNumber(n - 1); 
// } 
// printNumber(10); 





module.exports = steps; 














