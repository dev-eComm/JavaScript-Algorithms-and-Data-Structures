/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/
/* var arr = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
]; */

function filterByValue(arr, key) {
  return arr.filter(function (value) {
    return value[key] !== undefined;
  });
}

console.log(
  filterByValue(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner"
  )
);

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
  return arr.filter(function (value) {
    return value === searchValue;
  })[0];
}

console.log(find([1, 2, 3, 4, 5, 4], 4)); // 4
console.log(find([1, 2, 3, 4, 5, 7], 10)); // undefined

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
  return arr.filter(function (value) {
    return value[key] === searchValue;
  })[0];
}
console.log(
  findInObj(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner",
    true
  )
);
function removeVowels(str) {
  var vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (value) {
      return vowels.indexOf(value) === -1;
    })
    .join("");
}

console.log(removeVowels("Elie"));
console.log(removeVowels("TIM"));
console.log(removeVowels("ZZZZZZ"));

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  return arr
    .filter(function (val) {
      return val % 2 !== 0;
    })
    .map(function (val) {
      return val * 2;
    });
}

console.log(doubleOddNumbers([1, 2, 3, 4, 5]));
console.log(doubleOddNumbers([4, 4, 4, 4, 4]));
var arr1 = [1, 2, 3];
var arr2 = arr1.filter(function (value) {
  return value > 2;
});
console.log(arr2);
