var Isogram = function(input) {
  this.word = input;
  this.isIsogram =  function() {
    var letters = this.word.toLowerCase().replace(/\W/g,"").split("");
    for (var i = 0; i < letters.length; i++){
      if (letters.lastIndexOf(letters[i]) > i){
        return false;
      }
    }
    return true;
  };
};

module.exports = Isogram;
