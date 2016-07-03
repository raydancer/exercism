var Gigasecond = function(input) {
  this.original = input.getTime();
  this.date =  function() {
    return new Date(this.original + 1e12);
  };
};

module.exports = Gigasecond;
