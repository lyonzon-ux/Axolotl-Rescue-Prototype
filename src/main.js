let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 540,
    scene: [menu, play,death]
}

 let game = new Phaser.Game(config);
// set UI size
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;