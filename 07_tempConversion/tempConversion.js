const ftoc = function(temp) {
  return Math.round(50 * (temp - 32) / 9) / 10;
};

const ctof = function(temp) {
  return Math.round(18 * temp + 320) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
