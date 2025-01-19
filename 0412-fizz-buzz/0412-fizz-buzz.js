/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
let store =[]

  for(i = 1; i <= n ; i++){
      if(i%3===0 &&  i%5===0){
          store.push("FizzBuzz")
      }else if(i%3===0){
          store.push('Fizz')
      }else if(i%5===0){
          store.push("Buzz")
      }else{
          store.push(i.toString())
      }
  }
  return store
};
console.log(fizzBuzz(5))