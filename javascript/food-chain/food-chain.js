var FoodChain = function() {
  this.verse = function(verNum) {
    var lyrics = [
      ["lady", "I know an old lady who swallowed a "],
      ["fly", "I don't know why she swallowed the fly. Perhaps she'll die."],
      ["spider", "It wriggled and jiggled and tickled inside her."],
      ["bird", "How absurd to swallow a bird!"],
      ["cat", "Imagine that, to swallow a cat!"],
      ["dog", "What a hog, to swallow a dog!"],
      ["goat", "Just opened her throat and swallowed a goat!"],
      ["cow", "I don't know how she swallowed a cow!"],
      ["horse", "She's dead, of course!"]
    ];
      var verComp = "";
      var spiderbit = "";
      verComp += `${lyrics[0][1]}${lyrics[verNum][0]}.\n`;
      if (verNum === 8){
        verComp += "She's dead, of course!\n";
        return verComp;
      }
      if (verNum > 1 && verNum < 8){
        verComp += `${lyrics[verNum][1]}\n`
      }
      for (var i = verNum; i > 1; i--){
        if (i === 3){
          spiderbit = " that wriggled and jiggled and tickled inside her"
        } else {
          spiderbit = "";
        }
        verComp += `She swallowed the ${lyrics[i][0]} to catch the ${lyrics[i-1][0]}${spiderbit}.\n`
      }
      verComp += `${lyrics[1][1]}\n`
      return verComp;
  };

  this.verses = function(startVer, endVer) {
    var verComp = "";
    for (var i = startVer; i <= endVer; i++){
      verComp += this.verse(i) + "\n";
    }
    return verComp;
  };
};

module.exports = FoodChain;
