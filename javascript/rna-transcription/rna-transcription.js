var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
  var Rna = '';
  for (var i = 0; i < input.length; i++){
    if (input[i] === 'C'){
      Rna += 'G';
    }
    if (input[i] === 'G'){
      Rna += 'C';
    }
    if (input[i] === 'A'){
      Rna += 'U';
    }
    if (input[i] === 'T'){
      Rna += 'A';
    }
  }
  return Rna;
};

module.exports = DnaTranscriber;
