var Keese = function(g, w){
  this.game = g;
  this.world = w;
  this.keeseEnemy;

  this.FLY_SPEED = 250;
};

Keese.prototype = {
  placeEnemy: function(x, y){
    this.keeseEnemy = this.game.add.sprite(x, y, 'keese');
    this.keeseEnemy.anchor.setTo(0.5, 0.5);
    this.keeseEnemy.scale.setTo(1.5, 1.5);

    this.game.physics.arcade.enable(this.keeseEnemy);
    this.keeseEnemy.outOfBoundsKill = true;

    this.setAnimations();
  },

  setAnimations: function(){
    this.keeseEnemy.animations.add('fly-left', [1, 2, 3, 4, 5, 6], 10, true);
  },

  flyLeft: function(){
    this.keeseEnemy.animations.play('fly-left');
    //this.keeseEnemy.body.velocity.x = -(this.FLY_SPEED);
  }
};
