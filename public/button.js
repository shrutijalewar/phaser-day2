var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create , update:update});

function preload() {

    game.load.spritesheet('button', '/img/assets/buttons/follow-style-button.png', 193, 71);
    game.load.image('background','img/assets/misc/starfield.jpg');
    game.load.image('foreground','img/assets/misc/starfield.png');

}

var button;
var background;
var foreground;

function create() {

    //game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');
    foreground = game.add.tileSprite(100, 200, 400, 300, 'foreground');

    button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.anchor.setTo(0.2, 0.8);
}

function over() {
    alert('make it stop!');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    background.visible =! background.visible;
     alert("You managed to click!!");
     button.angle -= 0;

}
function update () {

    button.angle -= 5;
    actionOnClick();

}
