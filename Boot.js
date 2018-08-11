var Loz = {

  music: null,

  // Constants if I need them

};

Loz.Boot = function(game){};

Loz.Boot.prototype = {

  init: function(){
    this.input.maxPointers = 1;

    //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.time.desiredFps = 50;
  },

  preload: function(){
    //this.load.path('assets');
    this.load.image('preloadBar', 'assets/preloader_bar.gif');
  },

  create: function(){
    this.state.start('Preloader');
  }

};
