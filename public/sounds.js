var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create});

function preload() {

    game.load.image('spyro', '/img/assets/pics/spyro.png');

    //  Firefox doesn't support mp3 files, so use ogg
    game.load.audio('escape', ['/img/assets/audio/SoundEffects/escape.wav', 'assets/audio/SoundEffects/squit.ogg']);

	game.load.image('background','/img/assets/pics/dr_death-e605-endpart.png');

}

var s;
var music;
var background;

function create() {

    background = game.add.image(0,0,'background');

	background.scale.set(3)


    music = game.add.audio('escape',1,true);

    music.play('',0,1,true);

    s = game.add.sprite(130,360, 'spyro');

}
