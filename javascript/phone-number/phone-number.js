var PhoneNumber = function(input) {

  var num = input.match(/\d+/g).join('');

  this.number = function(){
    if ((num.length < 10 || num.length > 11) || (num.length === 11 && num[0] !== '1')){
      return '0000000000';
    } else if (num.length === 11 && num[0] === '1'){
      num = num.substr(1,10);
    }
    return num;
  }

  var cleanNum = this.number();

  this.areaCode = function(){
    return cleanNum.substr(0,3);
  }

  this.toString = function(){
    return '(' + this.areaCode() + ') ' + cleanNum.substr(3,3) + '-' + cleanNum.substr(6,4);
  }
};

module.exports = PhoneNumber;
