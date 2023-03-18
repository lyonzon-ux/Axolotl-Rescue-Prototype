var deathScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "deathScene" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
        console.log("GAme over Scene");
        var text = this.add.text(
            400,
            250,
            "Game Over",
            {
                fontsize:50,
                color: "#00000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        var text = this.add.text(
            400,
            300,
            "Game will restart shortly....",
            {
                fontsize:50,
                color: "#00000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.time.addEvent({
            delay: 5000,
            loop: false,
            callback:() => {
                this.scene.start("SceneOne");
            }
    })
    },
    update: function(){}

});