/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let data = address
    let array = ""
    
    for (let i = 0;i<data.length;i++){
       if(data[i]==="."){
        array  +='[.]'
        
       }else{
           array += data[i]
       }
     
    }
    return array
    
};
console.log(defangIPaddr("1.1.1.1"))
