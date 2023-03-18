var platforms;
var player;
var score=0;
var scoreText;
var bombs;
var gameOver;


var SceneTwo = new Phaser.Class({
    Extends: Phaser.Scene, 
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneTwo" });
    },
    init: function() {},
    preload: function() {
        this.load.image('ocean', 'assets/Ocean.png');
        this.load.image('axolotl', 'assets/axo.png');
        this.load.image('bubble', 'assets/bubbleplats.png');
        this.load.image('bomb', 'assets/spikes.png');
        this.load.spritesheet('friend', 'assets/octo.png',
        { frameWidth: 32, frameHeight: 48 }
        
    );
    },



    
    create: function() {

        //background
        this.add.image(400,300, 'ocean');
    
         //platforms   
        platforms = this.physics.add.staticGroup();
    
        platforms.create(400, 568, 'bubble').setScale(2).refreshBody();
    
        platforms.create(600, 400, 'bubble');
        platforms.create(50, 250, 'bubble');
        platforms.create(750, 220, 'bubble');
    
        //player
        player = this.physics.add.sprite(100, 450, 'friend');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('friend', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'friend', frame: 4 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('friend', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });   
        
       
        cursors = this.input.keyboard.createCursorKeys();
    
        axo = this.physics.add.group({
            key: 'axolotl',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
    
        axo.children.iterate(function (child) {
    
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        });
        
        bombs=this.physics.add.group();
    
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(axo, platforms);
        
    
        this.physics.add.overlap(player, axo, this.collectAxo,null, this);
        this.physics.add.collider(player, bombs, this.hitBomb, null, this);

    
    
    
    },



    update: function() {

        if (cursors.left.isDown)
        {
            console.log("It kinda works?")
            player.setVelocityX(-160);
        
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
        
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if(cursors.up.isDown&&player.body.touching.down)
        {
            player.setVelocityY(-330);
        }

        if (gameOver==true) {
            console.log("AAAAAgameover");
            gameOver=false;
            this.time.addEvent({
                delay: 3000,
                loop: false,
                callback:() => {
                    this.scene.start("deathScene");
                }
                
            })
            score=0
        }

    
    
    },

    collectAxo: function(player, axolotl)
    {
        console.log("it work again??");
        axolotl.disableBody(true,true);
        score+=15;
        scoreText.setText('Score:' + score);
    
        if (axo.countActive(true) === 0)
        {
              //A new batch of stars to collect
            axo.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });
    
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
    
        }
     },


    hitBomb:function(player,bomb) {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        gameOver=true;

        //if (gameOver==true) {
        //    console.log("gameover");
            //this.time.addEvent({
            //    delay: 3000,
            //    loop: false,
            //    callback:() => {
            //        this.scene.start("deathScene");

        //}
     //})
    }
    







    
});