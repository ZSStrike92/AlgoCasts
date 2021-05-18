// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const buildCharMap = str => {
//     const map = {};
//     for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         map[char] = map[char]++ || 1
//     }
//     return map;
// }

// function anagrams(stringA, stringB) {
//     const aMap = buildCharMap(stringA);
//     const bMap = buildCharMap(stringB);
//     if (Object.keys(aMap).length !== Object.keys(bMap).length) return false;
//     for (const letter in aMap) {
//         if (aMap[letter] !== bMap[letter]) return false;
//     }
//     return true;
// }

const cleanString = str => str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
