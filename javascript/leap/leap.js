var year = function(input) {
  year.value = input;
};

year.prototype.isLeap = function () {
  if ((year.value % 400) === 0){
    return true;
  } else if ((year.value % 100) === 0) {
    return false;
  } else if ((year.value % 4) === 0){
    return true;
  } else {
    return false;
  }
};

module.exports = year;
