var names = [];

var Robot = function() {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randLetter = function (){
    return letters.charAt(Math.floor(Math.random() * 26));
  } 
  var randNum = function (){
    return Math.floor(Math.random() * 10);
  }
  var randName = function (){
    return randLetter() + randLetter() + randNum() + randNum() + randNum();
  }
  this.name = randName();
  while (names.includes(this.name) === true){
    this.name = randName();
  }
    names.push(this.name);
    this.reset = function (){
      while (names.includes(this.name) === true){
        this.name = randName();
      }
      names.push(this.name);
    }
};

module.exports = Robot;
