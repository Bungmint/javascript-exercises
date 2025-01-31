const sumAll = function(a, b) {
    if (!Number.isInteger(a)) return "ERROR";
    if (!Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    let ans = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) ans += i;
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
