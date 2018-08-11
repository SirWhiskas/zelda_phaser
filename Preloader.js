Loz.Preloader = function(game){

  this.preloadBar = null;
  this.ready = false;

};

Loz.Preloader.prototype = {

  preload: function(){
    this.preloadBar = this.add.sprite(0, 100, 'preloaderBar');
    this.preloadBar.anchor.setTo(0,0.5);
 		this.preloadBar.scale.setTo(1,1);
 		this.preloadBar.x = this.world.centerX - this.preloadBar.width/2;

    this.load.setPreloadSprite(this.preloadBar);

    // Main Menu
    this.load.image('main-menu', 'assets/backgrounds/main-menu.jpg');

    // Level 001
    this.load.image('level001-layer1', 'assets/forest-background/far-background.png');
    this.load.image('level001-layer2', 'assets/forest-background/forest-background.png');
    this.load.image('level001-layer3', 'assets/forest-background/near-background.png');

    this.load.image('level001-ground1', 'assets/forest-background/Tiles/ground1.png');
    this.load.image('level001-ground2', 'assets/forest-background/Tiles/ground2.png');
    this.load.image('level001-ground3', 'assets/forest-background/Tiles/ground3.png');
    this.load.image('level001-ground4', 'assets/forest-background/Tiles/ground4.png');

    this.load.image('level001-platform1', 'assets/forest-background/Tiles/grassPlatform1.png');
    this.load.image('level001-platform2', 'assets/forest-background/Tiles/grassPlatform2.png');
    this.load.image('level001-inclineLeft', 'assets/forest-background/Tiles/grassInclineLeft.png');
    this.load.image('level001-inclineRight', 'assets/forest-background/Tiles/grassInclineRight.png');
    this.load.image('level001-soil1', 'assets/forest-background/Tiles/back1.png');
    this.load.image('level001-soil2', 'assets/forest-background/Tiles/back2.png');
    this.load.image('level001-soil3', 'assets/forest-background/Tiles/back3.png');
    this.load.image('level001-soil4', 'assets/forest-background/Tiles/back4.png');
    this.load.image('level001-soil5', 'assets/forest-background/Tiles/back5.png');
    this.load.image('level001-soil6', 'assets/forest-background/Tiles/back6.png');

    this.load.image('beanglider', 'assets/link/beanglider.png');
    this.load.image('bomb', 'assets/link/bomb-icon.png');

    this.load.audio('mainMusic', ['audio/Main.mp3', 'audio/Main.oog']);
    this.load.atlasJSONHash('link', 'assets/link3/link3sheet.png','assets/link3/link3.json');
    this.load.atlasJSONHash('keese', 'assets/keese-sprites/test/keese.png','assets/keese-sprites/test/keese.json');
  },

  create: function(){
    this.preloadBar.cropEnabled = false;
		this.state.start('MainMenu');
  },

  update: function(){
    // Do nothing for now
  }

}
