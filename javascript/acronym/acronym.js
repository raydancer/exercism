function parse (input){
  var regEx = /(\b[A-Z]{1}|\b[a-z]{1})|(?![a-z])([A-Z]{1})(?=[a-z])/g;
    var output = input.match(regEx);
    return output.join('').toUpperCase();
};

module.exports =  {
    parse: parse
};
