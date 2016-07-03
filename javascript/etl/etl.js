var ETL = function() {
  this.transform = function (input){
    var newDataset = {};
    var scoreKeys = Object.keys(input);
    for (var k = 0; k < scoreKeys.length; k++){   //for each key
      for (var v = 0; v < input[scoreKeys[k]].length; v++){   //for each value array
        newDataset[input[scoreKeys[k]][v].toLowerCase()] = parseInt(scoreKeys[k]);
      }
    }
    return newDataset;
  }
};

module.exports = ETL;
