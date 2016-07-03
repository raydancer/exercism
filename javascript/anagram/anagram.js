var Anagram = function(input) {
  var subject = input;
  this.matches = function (matches){
    if (Array.isArray(arguments[0]) !== true){
      matches = [arguments[0]];
      for (var i = 1; i < arguments.length; i++){
        matches.push(arguments[i]);
      }
    }
    return matches.filter(function(word){
      if (subject.toLowerCase() === word.toLowerCase()){
        return false;
      }
      if (subject.toLowerCase().split('').sort().join() == word.toLowerCase().split('').sort().join()){
        return true;
      } else {
        return false;
      }
    });
  };
};

module.exports = Anagram;
