/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
     var value = init

     function increment(){
      return  init +=1
      
     }
     function reset(){
        return init = value
     }
    function decrement(){
       return --init
    }
return {increment,decrement,reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */