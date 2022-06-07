/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
    if(arguments.length === 1){
    return function(b){
      return a*b;
    };
  }
  return a*b;
}
console.log(specialMultiply(3,4));//12
console.log(specialMultiply(3)(4));//12
console.log(specialMultiply(3)); //ƒ (b){
      return a*b;
    }
