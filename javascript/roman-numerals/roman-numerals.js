var toRoman = function(input) {
  var output = '';
  var numerals = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M']
  ]
  for (var i = numerals.length - 1; i >= 0;){
    if (input - numerals[i][0] >= 0){
      output += numerals[i][1];
      input -= numerals[i][0];
    } else {
      i--;
    }
  }
  return output;
};

module.exports = toRoman;
