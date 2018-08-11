var Link = function(g, w){

  this.game = g;
  this.world = w;
  this.timer;

  this.player;
  this.isLeft = false;
  this.isRight = false;

  this.RUN_SPEED = 200;
  this.ATTACK_VELOCITY_FORCE = 400;

};

Link.prototype = {

  setSpriteProperties: function(){
    this.player = this.game.add.sprite(this.world.centerX - 400, this.world.centerY, 'link');
  	this.player.anchor.setTo(0.5, 0.5);
  	this.player.scale.setTo(1.5, 1.5);

    this.game.physics.arcade.enable(this.player);
    //this.player.body.bounce.y = 0.2;
  	this.player.body.gravity.y = 700;
  	this.player.body.collideWorldBounds = false;

    this.setAnimations();
  },

  setAnimations: function(){
    this.player.animations.add('beanglide-right', [48, 49, 50], 10, true);
    this.player.animations.add('hookshot-right', [52], 10, true);
    this.player.animations.add('jumpAttack-right', [55, 56, 57], 10, true);
    this.player.animations.add('jump-right', [58, 59], 10, true);
    this.player.animations.add('bombrun-right', [66, 67, 68, 69], 10, true);

    this.player.animations.add('left', [28, 29, 30, 31, 32, 33], 10, true);
  	this.player.animations.add('right', [60, 61, 62, 63, 64, 65], 10, true);

  	this.player.animations.add('look-left', [20], 10, true);
  	this.player.animations.add('look-right', [43], 10, true);

  	this.player.animations.add('evade-left', [5], 10, true);
  	this.player.animations.add('evade-right', [51], 10, true);

  	this.player.animations.add('hurt-left', [7], 10, true);
  	this.player.animations.add('hurt-right', [53, 54], 10, true);

  	this.player.animations.add('attack-left', [5, 16, 17, 18, 20, 21, 22, 23, 0, 1, 2, 3, 4], 10, true);
  	this.player.animations.add('attack-right', [44, 45, 46, 47, 48], 10, true);

    // Initial start
    // left = 39
    this.player.frame = 75;
  },

  standRight: function(){
    this.player.frame = 75;
    this.isRight = true;
    this.isLeft = false;
  },

  standLeft: function(){
    this.player.frame = 39;
    this.isLeft = true;
    this.isRight = false;
  },

  runRight: function(){
    this.player.animations.play('right');
    if(this.player.position.x < this.world.centerX-300){
      this.player.body.velocity.x = this.RUN_SPEED;
    }else if(this.player.position.x > this.world.centerX){
      this.player.body.velocity.x -= 10;
    }else{
      this.player.body.velocity.x = 0;
    }

    this.isRight = true;
    this.isLeft = false;
  },

  runLeft: function(){
    this.player.animations.play('left');
    if(this.player.position.x < this.world.centerX){
      this.player.body.velocity.x = -(this.RUN_SPEED);
    }else{
      this.player.body.velocity.x = 0;
    }
    //this.player.body.velocity.x = -(this.RUN_SPEED);
    this.isLeft = true;
    this.isRight = false;
  },

  slowToLeft: function(){
    if(this.player.position.x > this.world.centerX - 300){
      this.player.body.velocity.x = -this.RUN_SPEED;
      this.player.animations.play('right', 1);
    }
  },

  attackRight: function(){
    this.player.animations.play('attack-right');
    this.player.body.velocity.x = 0;
  },

  jumpAttackRight: function(){
    this.player.animations.play('jumpAttack-right');
    //this.player.frame = 56;
    this.player.body.velocity.y = this.ATTACK_VELOCITY_FORCE;
  },

  jumpRight: function(){
    //this.player.animations.play('jump-right');
    this.player.frame = 58;
    this.player.body.velocity.y = -(this.RUN_SPEED+220);
    //this.player.frame = 52;

    //this.player.body.velocity.x = this.player.body.velocity.x - 5;
    //this.player.body.velocity.x = this.player.body.velocity.x + 5;
  },

  fallRight: function(){
    this.player.frame = 58;
  },

  hookshotRight: function(){
    this.player.frame = 52;
  },

  beanglideRight: function(){
    this.player.animations.play('beanglide-right');
    this.player.body.gravity.y = 0;
    if(this.player.position.y > 100){
      this.player.body.velocity.y -= 10;
    }else{
      this.player.body.velocity.y = 0;
    }

  },

  stop: function(){
    this.player.body.velocity.x = 0;
    if(this.isLeft == true){
      this.standLeft();
      //this.game.time.events.repeat(Phaser.Timer.SECOND * 2);
      //this.decelerateLeft();
    }else{
      this.standRight();
      //this.decelerateRight();
    }
  },

  isOnGround(){
    return this.player.body.touching.down;
  },

  setVelocityX: function(value){
    this.player.body.velocity.x = value;
  },

  decelerateLeft: function(){

  },

  decelerateRight: function(){

  }

};
