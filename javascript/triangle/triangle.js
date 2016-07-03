var Triangle = function(a, b, c) {
  this.kind = function (){
    if (a + b < c || b + c < a || a + c < b){
      throw new Error ('This is not a triangle.');
    } else if (a <= 0 || b <= 0 || c <= 0){
      throw new Error ('Sides cannot be less than or equal to zero.');
    }
    if (a === b && b === c && a === c){
      return 'equilateral';
    }
    if (a === b || b === c || a === c){
      return 'isosceles';
    }
    return 'scalene';
  }
};

module.exports = Triangle;
