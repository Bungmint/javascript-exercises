const reverseString = function(string) {
    let res = "";
    let n = string.length;
    for (let i = n - 1; i >= 0; i--) {
        res += string[i];
    }
    return res;
    // string.split('').reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
