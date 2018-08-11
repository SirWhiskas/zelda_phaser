var Timer = function(g){
  this.game = g;
  this.timer;
  this.seconds
};

Timer.prototype = {

  setTimer(s){
    this.seconds = s;
    this.timer = this.game.timer.create(false);
  },

};
