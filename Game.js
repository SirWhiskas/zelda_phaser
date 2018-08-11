
Loz.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

    this.levelObject;
    this.platforms;
    this.playerObject;
    this.enemyObjects = [];
    this.playerControlsObject;
    this.cursors;

    this.isOnBeanglider = false;
    this.hookshotCount = 0;
    this.hookshotLen = 0;
    this.hookshotPos = 0;

    this.beangliderCount = 0;
    this.beangliderLen = 0;
    this.beangliderPos = 0;

};

Loz.Game.prototype = {

    create: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.levelObject = new Levels(this.game, this.world, this.platforms);
        this.levelObject.setLevel('1');
        this.levelObject.getLevel();

        this.playerObject = new Link(this.game, this.world);
        this.playerObject.setSpriteProperties();

        for(var i = 0; i < 10; i++){
          this.enemyObjects[i] = new Keese(this.game, this.world);
          //this.enemyObjects[i].placeEnemy(Math.floor(Math.random()*(this.levelObject.levelLength-i)+1)+i, this.world.centerY-200);
          this.enemyObjects[i].placeEnemy(this.world.centerX+(1*i), this.world.centerY-200);
        }

        console.log(this.enemyObjects);


        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.input.mouse.capture = true;

        //console.log(this.playerObject.player);

        //this.game.camera.follow(this.playerObject.player);
    },

    update: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        this.game.physics.arcade.collide(this.playerObject.player, this.levelObject.platforms);
        //this.game.physics.arcade.collide(this.playerObject.player, this.enemyObjects[0].keeseEnemy);
        this.game.physics.arcade.overlap(this.playerObject.player, this.levelObject.beanglider, this.startGlider, null, this);

        if(this.playerObject.player.position.y > this.world.height){
          this.quitGame();
        }

        //this.game.physics.arcade.collide(this.playerObject.player, this.levelObject.beanglider);
        //this.game.physics.arcade.collide(this.playerObject.player, this.levelObject.beanglider);
        //this.game.physics.arcade.overlap(this.playerObject.player, this.levelObject.beanglider, this.setbeanglide());
        /*switch(true){
            case this.game.input.keyboard.isDown(Phaser.Keyboard.A):
              this.playerObject.runLeft();
              break;

            case this.game.input.keyboard.isDown(Phaser.Keyboard.D):
              this.playerObject.runRight();
              break;

            default:
              this.playerObject.stop();
              break;
        }*/

        switch (this.levelObject.currentLevelNo) {
          case 1:
            //this.levelObject.randomPlatforms();
            //this.game.time.events.add(Phaser.Timer.SECOND * 4, this.changeLevel(), this);
            //if(this.game.input.activePointer.leftButton.isDown && !(this.playerObject.player.body.touching.down))
            if(this.game.input.activePointer.leftButton.isDown && !(this.playerObject.player.body.touching.down) && !this.isOnBeanglider){
              if(this.hookshotCount == 0){
                this.hookshotLen = this.playerObject.player.position.x;
                this.hookshotPos = this.playerObject.player.position.x;
                this.hookshotCount++;
              }

              if(this.hookshotLen < this.hookshotPos + 20){
                this.playerObject.hookshotRight();
                this.levelObject.background1.tilePosition.x -= 40;
                this.levelObject.background2.tilePosition.x -= 40;
                this.levelObject.background3.tilePosition.x -= 40;

                this.levelObject.platforms.x -= 10;
                this.levelObject.beanglider.position.x -= 10;
                this.hookshotLen++;
              }
            }else if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.playerObject.player.body.touching.down && !this.isOnBeanglider){
              //if(this.playerObject.player.body.x < this.world.centerX){
                // do nothing
              //}else{
                this.playerObject.jumpRight();
              //}
            }else if(!(this.playerObject.player.body.touching.down) && !this.isOnBeanglider){
              this.playerObject.fallRight();
            }else if(this.game.input.keyboard.isDown(Phaser.Keyboard.A) && !this.isOnBeanglider){
              //this.playerObject.slowToLeft();
            }else if(this.isOnBeanglider){
              if(this.beangliderCount == 0){
                this.beangliderLen = this.playerObject.player.position.x;
                this.beangliderPos = this.playerObject.player.position.x;
                this.beangliderCount++;
              }

              if(this.beangliderLen < this.beangliderPos + 300){
                this.playerObject.beanglideRight();
                this.levelObject.background1.tilePosition.x -= 40;
                this.levelObject.background2.tilePosition.x -= 40;
                this.levelObject.background3.tilePosition.x -= 40;

                this.levelObject.platforms.x -= 10;
                this.levelObject.beanglider.position.x -= 5;
                this.beangliderLen++;
              }else{
                this.isOnBeanglider = false;
                this.playerObject.player.body.gravity.y = 700;
              }

            }else{
              this.playerObject.runRight();
              this.hookshotCount = 0;
              this.beangliderCount = 0;
            }

            //if(this.playerObject.player.position.x < this.world.centerX){

            //}else{
              this.levelObject.background1.tilePosition.x -= 20;
              this.levelObject.background2.tilePosition.x -= 20;
              this.levelObject.background3.tilePosition.x -= 20;

              this.levelObject.platforms.x -= 5;
              this.levelObject.beanglider.position.x -= 5;
            //}

            for(var n = 0; n < this.enemyObjects.length; n ++){
              this.enemyObjects[n].flyLeft();
              this.enemyObjects[n].keeseEnemy.body.velocity.x = -150;
            }

            break;

          case 2:
            this.game.camera.follow(this.playerObject.player);
            switch(true){
                case this.game.input.keyboard.isDown(Phaser.Keyboard.A):
                  this.playerObject.runLeft();
                  if(this.playerObject.player.position.x < this.world.centerX){

                  }else{
                    this.levelObject.background1.tilePosition.x += 30;
                    this.levelObject.background2.tilePosition.x += 30;
                    this.levelObject.background3.tilePosition.x += 30;
                  }
                  break;

                case this.game.input.keyboard.isDown(Phaser.Keyboard.D):
                  this.playerObject.runRight();
                  if(this.playerObject.player.position.x < this.world.centerX){

                  }else{
                    this.levelObject.background1.tilePosition.x -= 30;
                    this.levelObject.background2.tilePosition.x -= 30;
                    this.levelObject.background3.tilePosition.x -= 30;
                  }
                  break;

                default:
                  this.playerObject.stop();
                  break;
            }
            break;

          default:
            this.playerObject.runRight();

            this.levelObject.background1.tilePosition.x -= 30;
            this.levelObject.background2.tilePosition.x -= 30;
            this.levelObject.background3.tilePosition.x -= 30;
            break;
        }

    },

    startGlider: function(obj1, obj2){
      this.isOnBeanglider = true;
    },

    changeLevel: function(){
      this.levelObject.setLevel('2');
      this.levelObject.getLevel();

      this.playerObject = new Link(this.game, this.world);
      this.playerObject.setSpriteProperties();
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
        this.playerObject.player.kill();
        this.levelObject.beanglider.kill();
        this.levelObject.platforms.destroy();
        this.levelObject.background1.kill();
        this.levelObject.background2.kill();
        this.levelObject.background3.kill();

        titleMusic.destroy();

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};
