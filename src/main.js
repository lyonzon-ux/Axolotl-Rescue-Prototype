let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640
    
 }

 let game = new Phaser.Game(config);
// set UI size
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;