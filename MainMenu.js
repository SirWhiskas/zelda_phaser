Loz.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;
	this.back = null;

};

Loz.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		titleMusic = this.add.audio('mainMusic');
		titleMusic.play();

		this.back = this.add.sprite(0, 0, 'main-menu');
		this.back.scale.setTo(0.5,0.5);

		var playText = this.add.text(this.world.centerX, this.world.centerY+100, "Click to Play", {font: "45px Verdana", fill: "#CCA300", align: "center"});
		playText.anchor.set(0.5);
		playText.inputEnabled = true;
		playText.events.onInputDown.add(this.startGame, this);

		//this.add.sprite(0, 0, 'playButton');

		//this.state.start('Game');

		//this.input.onDown.addOnce(this.startGame, this);

		//this.input.onDown.addOnce(this.start, this);

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (btn) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.titleMusic.stop();

		//	And start the actual game
		this.state.start('Game');
		//this.state.start('LevelMenu');
		//alert("Game Started");

	}

};
