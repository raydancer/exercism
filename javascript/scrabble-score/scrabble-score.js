var Score = function(input) {
  if (input === null || input === ''){
    return 0;
  }
  input = input.toUpperCase();
  var output = 0;
  for (var i = 0; i < input.length; i++){
    if ('AEIOULNRST'.includes(input[i])){
      output += 1;
    } else if ('DG'.includes(input[i])){
      output += 2;
    } else if ('BCMP'.includes(input[i])){
      output += 3;
    } else if ('FHVWY'.includes(input[i])){
      output += 4;
    } else if ('K'.includes(input[i])){
      output += 5;
    } else if ('JX'.includes(input[i])){
      output += 8;
    } else if ('QZ'.includes(input[i])){
      output += 10;
    }
  }
  return output;
};

module.exports = Score;
