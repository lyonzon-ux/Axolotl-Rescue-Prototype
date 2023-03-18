var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
        var text = this.add.text(
            400,
            250,
            "Axolotl Rescue",
            {
                fontsize:50,
                color: "#00000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        var text = this.add.text(
            400,
            300,
            "Your friends have ran off and need to be saved!",
            {
                fontsize:50,
                color: "#00000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        var text = this.add.text(
            400,
            325,
            "Be careful, they'll run off again once they're back with you",
            {
                fontsize:50,
                color: "#00000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        var text = this.add.text(
            400,
            350,
            "Avoid the jumping bombs that appear when they do!",
            {
                fontsize:50,
                color: "#00000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        var text = this.add.text(
            400,
            400,
            "Use the arrow keys to jump and move around",
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
                this.scene.start("SceneTwo");
            }
        })
    },
    update: function(){}
});