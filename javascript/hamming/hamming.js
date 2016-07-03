var Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
  if (strand1.length === strand2.length){
    var hval = 0;
    for (var i = 0; i < strand1.length; i++){
      if (strand1[i] !== strand2[i]){
        hval++;
      }
    }
    return hval;
  } else {
    throw new Error('DNA strands must be of equal length.');
  }
};

module.exports = Hamming;
