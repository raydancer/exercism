var CircularBuffer = function (nElements){
  var buffer = [];
  var current = 0;
  for (var i = 0; i < nElements; i++){
    buffer[i] = [];
  }
  this.read = function (){
    if (buffer[current] === null){
      throw bufferEmptyException;
    }
    return buffer[current];
  }
  this.write = function (input){
    if (current < buffer.length - 1){
    current++;
  } else {
    current = 0;
  }
    buffer[current] = input;
  }
  this.clear = function (){

  }
};
module.exports = CircularBuffer;

var BufferEmptyException = function (){

};
module.exports = BufferEmptyException;


var BufferFullException = function (){

};
module.exports = BufferFullException;
