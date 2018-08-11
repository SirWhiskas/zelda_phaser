var Levels = function(g, w, p){

  this.game = g;
  this.world = w;
  this.platforms = p;
  this.wall;
  this.bomb;
  this.beanglider = null;
  this.randomBeanGlider = null;

  this.levelNo;
  this.currentLevelNo;
  this.levelLength;

  this.background1;
  this.background2;
  this.background3;

  this.BACKGROUND_WIDTH = 5120;
  this.BACKGROUND_HEIGHT = 2880;

};

Levels.prototype = {

  setLevel: function(lNo){
    this.levelNo = lNo;
  },

  getLevel: function(){
    switch (this.levelNo) {
      case '1':
        this.levelOne();
        this.currentLevelNo = 1;
        break;

      case '2':
        this.levelTwo();
        this.currentLevelNo = 2;
        break;

      default:
        this.levelOne();
        break;
    }
  },

  levelOne: function(){
    this.background1 = this.game.add.tileSprite(0, 0, this.BACKGROUND_WIDTH, this.BACKGROUND_HEIGHT, 'level001-layer1');
    //this.background1.anchor.setTo(0.5, 0.5);
    this.background1.scale.setTo(0.19, 0.19);

    this.background2 = this.game.add.tileSprite(0, 0, this.BACKGROUND_WIDTH, this.BACKGROUND_HEIGHT, 'level001-layer2');
    //this.background2.anchor.setTo(0.5, 0.5);
    this.background2.scale.setTo(0.19, 0.19);

    this.background3 = this.game.add.tileSprite(0, 0, this.BACKGROUND_WIDTH, this.BACKGROUND_HEIGHT, 'level001-layer2');
    //this.background3.anchor.setTo(0.5, 0.5);
    this.background3.scale.setTo(0.19, 0.19);

    this.game.physics.arcade.enable(this.background1);
    this.game.physics.arcade.enable(this.background2);
    this.game.physics.arcade.enable(this.background3);
    this.background1.body.immovable = true;
    this.background2.body.immovable = true;
    this.background3.body.immovable = true;

    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    this.wall = this.game.add.group();
    this.wall.enableBody = true;

    this.bomb = this.game.add.group();
    this.bomb.enableBody = true;

    /*for(var i=0; i<this.world.width/90; i++){
      this.platforms.create((i*90), this.world.height-20, 'level001-ground4');
    }*/

    var cHeight = this.world.height-20;
    var pHeight = this.world.height-20;;
    var numHeight;
    var numX;
    var width = 40;
    var cX = 0;
    var pX = 0;
    var randomBeanGlider = null;
    var levelLength;
    var platformType;

    for(var j=0; j<90; j++){

      cX = this.randomNumberGenerator(pX+(width*10), pX+(width*13));

      if(j<1){
        this.platforms.create(width*j, cHeight, 'level001-platform1');
        this.platforms.create(width*(j+1), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+2), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+3), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+4), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+5), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+6), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+7), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+8), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+9), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+10), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+11), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+12), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+13), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+14), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+15), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+16), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+17), cHeight, 'level001-platform2');
        this.platforms.create(width*(j+18), cHeight, 'level001-platform1');
        this.platforms.create(width*(j+19), cHeight, 'level001-platform2');

        pX = width*(j+19);
      }else{
        if(cHeight <= this.world.height-20){
          cHeight = this.world.height-20;
          cHeight = this.randomNumberGenerator(cHeight, cHeight-100);
        }else{
          cHeight = this.randomNumberGenerator(pHeight+100, pHeight-120);
        }

        platformType = this.randomNumberGenerator(1, 100);
        if(platformType < 25){
          this.platforms.create(cX, cHeight, 'level001-platform1');
          this.platforms.create(cX+width, cHeight, 'level001-platform2');
          this.platforms.create(cX+(width*2), cHeight, 'level001-platform1');
          this.platforms.create(cX+(width*3), cHeight, 'level001-platform2');
        }else if(platformType < 50){
          this.platforms.create(cX, cHeight, 'level001-platform1');
          this.platforms.create(cX+width, cHeight, 'level001-platform2');
          this.platforms.create(cX+(width*2), cHeight, 'level001-platform1');
          this.platforms.create(cX+(width*3), cHeight, 'level001-platform2');
          this.platforms.create(cX+(width*4), cHeight, 'level001-platform1');
          this.platforms.create(cX+(width*5), cHeight, 'level001-platform2');
          this.platforms.create(cX+(width*6), cHeight, 'level001-platform1');
          this.platforms.create(cX+(width*7), cHeight, 'level001-platform2');
        }else if(platformType < 75){
          this.platforms.create(cX, cHeight, 'level001-platform1');
          this.platforms.create(cX+width, cHeight, 'level001-platform2');
        }else if(platformType < 90){
          this.platforms.create(cX, cHeight, 'level001-platform1');
          this.platforms.create(cX+width, cHeight, 'level001-platform2');
          this.platforms.create(cX+(width*2), cHeight, 'level001-platform1');
          this.platforms.create(cX+(width*3), cHeight, 'level001-platform2');
          this.platforms.create(cX+(width*4), cHeight, 'level001-platform1');
          this.platforms.create(cX+(width*5), cHeight, 'level001-platform2');
          this.platforms.create(cX+(width*6), cHeight, 'level001-platform1');
          this.platforms.create(cX+(width*7), cHeight, 'level001-platform2');
          this.bomb.create(cX+(width*4), cHeight, 'bomb');
          this.wall.create(cX+(width*7), cHeight, 'level001-soil1');
        }else{
          this.platforms.create(cX, cHeight, 'level001-platform1');
        }

        // this.platforms.create(cX, cHeight, 'level001-platform1');
        // this.platforms.create(cX+width, cHeight, 'level001-platform2');
        // this.platforms.create(cX+(width*2), cHeight, 'level001-platform1');
        // this.platforms.create(cX+(width*3), cHeight, 'level001-platform2');

        pHeight = cHeight;
        pX = cX;
      }

    }

    this.levelLength = cX;
    this.beanglider = this.game.add.sprite(this.randomNumberGenerator(0, cX), this.randomNumberGenerator(this.world.centerY+50, this.world.centerY+100), 'beanglider');
    this.game.physics.arcade.enable(this.beanglider);

    //this.beanglider.body.collideWorldBounds = true;
    //console.log(this.beanglider);


    this.platforms.scale.setTo(1, 1);
    this.game.physics.arcade.enable(this.platforms);
    this.platforms.setAll('body.immovable', true);
    this.platforms.outOfBoundsKill = true;

  },

  levelTwo: function(){
    this.background1 = this.game.add.tileSprite(0, 0, this.BACKGROUND_WIDTH, this.BACKGROUND_HEIGHT, 'level001-layer1');
    //this.background1.anchor.setTo(0.5, 0.5);
    this.background1.scale.setTo(0.19, 0.19);

    this.background2 = this.game.add.tileSprite(0, 0, this.BACKGROUND_WIDTH, this.BACKGROUND_HEIGHT, 'level001-layer2');
    //this.background2.anchor.setTo(0.5, 0.5);
    this.background2.scale.setTo(0.19, 0.19);

    this.background3 = this.game.add.tileSprite(0, 0, this.BACKGROUND_WIDTH, this.BACKGROUND_HEIGHT, 'level001-layer2');
    //this.background3.anchor.setTo(0.5, 0.5);
    this.background3.scale.setTo(0.19, 0.19);

    //this.game.physics.arcade.enable(this.background1);
    //this.game.physics.arcade.enable(this.background2);
    //this.game.physics.arcade.enable(this.background3);
    //this.background1.body.immovable = true;
    //this.background2.body.immovable = true;
    //this.background3.body.immovable = true;

    /*this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    for(var i=0; i<this.world.width/90; i++){
      this.platforms.create((i*90), this.world.height-20, 'level001-ground4');
    }

    this.platforms.scale.setTo(1, 1);
    this.platforms.setAll('body.immovable', true);*/
  },

  randomPlatforms: function(){
    this.ledge = this.game.add.sprite(this.world.centerX, this.world.centerY, 'level001-platform1');
  },

  randomNumberGenerator: function(max, min){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

};
