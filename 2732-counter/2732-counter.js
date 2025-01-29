/**
 * @param {number} 
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        console.log(n)
        return n++;
  
   };
};
const counter =createCounter(10)
counter()
counter()
counter()
counter()
counter()
counter()


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */