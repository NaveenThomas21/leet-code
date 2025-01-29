/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */var commonFactors = function(a, b) {
let data = []
for(let i =0;i <= Math.min(a,b);i++){
    if(a%i===0 && b%i===0){
        data.push(i)
    }
}
    return data.length
};
console.log(commonFactors(12,6))