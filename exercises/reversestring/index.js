// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

// function reverse(str) {
//     let reversed = '';
//     for (let char of str) {
//         reversed = char + reversed
//     }
//     return reversed;
// }

module.exports = reverse;