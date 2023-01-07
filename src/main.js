let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 540
    
 }


 // set UI size
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ocean', 'assets/Ocean.png')
}

function create ()
{this.add.image(700,540,'ocean');

}

function update ()
{
}