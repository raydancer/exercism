var Clock = function (hours, mins){
  if (mins === undefined){
    mins = 0;
  }
  var totalmin = (hours * 60) + mins;
  return getTime (totalmin);
};

String.prototype.plus = function (add){
  var hours = parseInt(this.split(":")[0]);
  var mins = parseInt(this.split(":")[1]);
  var totalmin = (hours * 60) + mins + add;
  return getTime (totalmin);
}

String.prototype.minus = function (subtract){
  var hours = parseInt(this.split(":")[0]);
  var mins = parseInt(this.split(":")[1]);
  var totalmin = (hours * 60) + mins - subtract;
  return getTime (totalmin);
}

String.prototype.equals = function (that){
  if (this.toString() === that.toString()){
    return true;
  } else {
    return false;
  }
}

var getTime = function (totalmin){
  totalmin = totalmin % 1440;
  if (totalmin >= 0){
    hours = (totalmin - (totalmin % 60)) / 60;
    mins = totalmin % 60;
  } else {
    hours = 23 + ((totalmin - (totalmin % 60)) / 60);
    mins = 60 + (totalmin % 60);
  }
  if (mins === 60){
    hours += 1;
    mins = 0;
  }
  if (hours === 24){
    hours = 0;
  }
  hours = hours.toString();
  if (hours.length === 1){
    hours = "0" + hours;
  }
  mins = mins.toString();
  if (mins.length === 1){
    mins = "0" + mins;
  }
  return `${hours}:${mins}`;
}

function at (hours, mins) {
  return new Clock (hours, mins);
}

module.exports.at = Clock;
