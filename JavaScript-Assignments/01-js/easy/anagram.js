/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

//first solution...

// function isAnagram(a, b) {
//   const aMap = new Map();
//   const bMap = new Map();
//   a = a.toLowerCase();
//   b = b.toLowerCase();
//   let i = 0;

//   if (a.length !== b.length) {
//     return false;
//   }

//   while (i < a.length) {
//     aMap.set(a[i], aMap.get(a[i]) + 1 || 1);
//     bMap.set(b[i], bMap.get(b[i]) + 1 || 1);
//     i++;
//   }

//   console.log(aMap)

//   for (let i = 0; i < a.length; i++){
//     if (aMap.get(a[i]) !== bMap.get(a[i])) {
//       return false;
//     }
//   }
//   return true;
// }

//second solution...
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // .split('') converts string to array of characters
  // .sort() sorts the array in alphabetical order
  // .join('') converts array of characters back to string

  function sortString(str) {
    return str.toLowerCase().split('').sort().join('');
  }
  return sortString(str1) === sortString(str2);
}

module.exports = isAnagram;








// function isAnagram(str1, str2) {

//   if (str1.length !== str2.length) {
//       return false;
//   }


//   function sortString(str) {
//       return str.toLowerCase().split('').sort().join('');
//   }


//   return sortString(str1) === sortString(str2);
// }

// module.exports = isAnagram;