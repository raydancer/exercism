//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  //He answers 'Whoa, chill out!' if you yell at him.
  if (input.match(/[a-zA-Z]+/g) !== null && input === input.toUpperCase()){
    return 'Whoa, chill out!';
  }
  //Bob answers 'Sure.' if you ask him a question.
  if (input[input.length -1] === '?'){
    return 'Sure.';
  }
  //He says 'Fine. Be that way!' if you address him without actually saying anything.
  if (input.match(/\S+/) === null){
    return 'Fine. Be that way!';
  } else {
  //He answers 'Whatever.' to anything else.
    return 'Whatever.';
  }
};

module.exports = Bob;
