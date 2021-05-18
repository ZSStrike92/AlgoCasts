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

// function steps(n) {
//     let pound = '#'
//     let space = ' '
//     for (let i = 1; i <= n; i++) {
//         console.log(`${pound.repeat(i)}${space.repeat(n-i)}`)
//     }
// }

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let column = 0; column < n; column++) { 
//             if (row >= column) {
//                 stair += '#'
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair)
//     }
// }

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
        // return; either return statement is acceptable to end current function call
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

function printStair(n, str) {
    if (row === n) {
        return;
    }
    console.log()
    printStair(n - 1);
} 

module.exports = steps;
