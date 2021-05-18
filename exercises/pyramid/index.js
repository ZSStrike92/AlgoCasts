// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const numOfCols = n*2-1;
//     for (let row = 0; row < n; row++) {
//         let step = '';
//         for (let column = 0; column < numOfCols; column++) {
//             // console.log('COL', column)

//             // console.log('HERE', (numOfCols/2 - row))
//             if (column >= Math.floor(numOfCols/2) - row && column <= Math.floor(numOfCols/2) + row) {
//                 step += '#';
//             } else {
//                 step += ' ';
//             }
//         }
//         console.log(step);
//     }
// }

// function pyramid(n) {
//     const numOfCols = n*2-1;
//     const midpoint = Math.floor(numOfCols/2)
//     for (let row = 0; row < n; row++) {
//         let step = '';
//         for (let column = 0; column < numOfCols; column++) {
//             if (column >= midpoint - row && column <= midpoint + row) {
//                 step += '#';
//             } else {
//                 step += ' ';
//             }
//         }
//         console.log(step);
//     }
// }

function pyramid(n, row = 0, step = '') {
    if (row === n) return;
    const numOfCols = n*2-1;
    const midpoint = Math.floor(numOfCols/2);
    
    if (step.length >= numOfCols) {
        console.log(step);
        return pyramid(n, row + 1)
    }

    if (step.length >= midpoint - row && step.length <= midpoint + row) {
        step += '#';
    } else {
        step += ' ';
    }
    pyramid(n, row, step);
}

// '  #  '
// ' ### '
// '#####'

// '    #    '
// '   ###   '
// '  #####  '
// ' ####### '
// '#########'

module.exports = pyramid;
