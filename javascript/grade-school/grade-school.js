var School = function() {
  var db = {};
  this.roster = function(){
    return db;
  };
  this.add = function(name, grade){
    if (db[grade] === undefined){
      db[grade] = [];
    }
    db[grade].push(name);
    db[grade].sort();
  };
  this.grade = function(grade){
    if (db[grade] === undefined){
      return [];
    } else {
      return db[grade];
    }
  }
};

module.exports = School;
