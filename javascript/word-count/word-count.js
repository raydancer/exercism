var Words = function() {};

Words.prototype.count = function(input) {
  var wlist = input.trim().toLowerCase().split(/\s+/);
      console.log(wlist);
  var wcount = {};
  for (var i = 0; i < wlist.length; i++){
    if (Object.keys(wcount).includes(wlist[i])){
      wcount[wlist[i]]++;
    } else {
      wcount[wlist[i]] = 1;
    }
  }
  return wcount;
};

module.exports = Words;
