var SpaceAge = function(input) {
  this.seconds = input;
//  Earth: orbital period 365.25 Earth days, or 31557600 seconds
  this.onEarth = function(){
    return (Math.round((this.seconds / 60 / 60 / 24 / 365.25) * 100) / 100);
  }
//  Mercury: orbital period 0.2408467 Earth years
  this.onMercury = function(){
    return (Math.round((this.seconds / 60 / 60 / 24 / (365.25 * 0.2408467)) * 100) / 100);
  }
//  Venus: orbital period 0.61519726 Earth years
  this.onVenus = function(){
    return (Math.round((this.seconds / 60 / 60 / 24 / (365.25 * 0.61519726)) * 100) / 100);
  }
//  Mars: orbital period 1.8808158 Earth years
  this.onMars = function(){
    return (Math.round((this.seconds / 60 / 60 / 24 / (365.25 * 1.8808158)) * 100) / 100);
  }
//  Jupiter: orbital period 11.862615 Earth years
  this.onJupiter = function(){
    return (Math.round((this.seconds / 60 / 60 / 24 / (365.25 * 11.862615)) * 100) / 100);
  }
//  Saturn: orbital period 29.447498 Earth years
  this.onSaturn = function(){
    return (Math.round((this.seconds / 60 / 60 / 24 / (365.25 * 29.447498)) * 100) / 100);
  }
//  Uranus: orbital period 84.016846 Earth years
  this.onUranus = function(){
    return (Math.round((this.seconds / 60 / 60 / 24 / (365.25 * 84.016846)) * 100) / 100);
  }
//  Neptune: orbital period 164.79132 Earth years
  this.onNeptune = function(){
    return (Math.round((this.seconds / 60 / 60 / 24 / (365.25 * 164.79132)) * 100) / 100);
  }
};

module.exports = SpaceAge;
