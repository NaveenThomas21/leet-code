function isPalindrome(x) {
    let a = x;
    let b = a.toString().split('').reverse().join('');
    return b === a.toString();
}

var param_1 = 1111;
var ret = isPalindrome(param_1);
console.log(ret);

