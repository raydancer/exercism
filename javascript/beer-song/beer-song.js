var BeerSong = function() {};

BeerSong.prototype.verse = function(num) {
  var verse = '';
    if (num > 2){
      verse = num + ' bottles of beer on the wall, ' + num + ' bottles of beer.\nTake one down and pass it around, ' + (num -1) + ' bottles of beer on the wall.\n';
    } else if (num === 2){
      verse = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    } else if (num === 1){
      verse = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    } else {
      verse = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
  return verse;
};

BeerSong.prototype.sing = function(start,end) {
  var verses = '';
  if (arguments.length === 2){
    for (var i = start; i >= end; i--){
      verses += this.verse(i) + '\n';
    }
  } else {
    for (var i = start; i >= 0; i--){
      verses += this.verse(i) + '\n';
    }
  }
  return verses.slice(0,-1);
};

module.exports = BeerSong;
