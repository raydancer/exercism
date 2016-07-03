var alpha = "abcdefghijklmnopqrstuvwxyz";

var Pangram = function(input) {
  this.phrase = input;
  this.isPangram = function (){
    for (var i = 0; i < alpha.length; i++){
      if (this.phrase.toLowerCase().lastIndexOf(alpha[i]) === -1){
        return false;
      }
    }
    return true;
  };
};

module.exports = Pangram;
