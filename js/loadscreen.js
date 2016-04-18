var loadScreen = function(game){
    console.log("loadScreen");
};

loadScreen.prototype = {
    preload: function(){
        this.game.load.image('advancebutton', 'assets/images/advancebutton-02.png');
        this.game.load.image('intro', 'assets/images/introscreen.png');
        this.game.load.image('next-button', 'assets/images/next-button.png');
        this.game.load.image('start-button', 'assets/images/start-button.png');
        this.game.load.image('try-again-button', 'assets/images/try-again-button.png');
    },
    create: function(){
        var style = { font: "bold 32px Arial", fill: "#fff"};
        var text = this.game.add.text(100, 280, "You are the Shape Man...", style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        this.game.time.events.add(Phaser.Timer.SECOND * 1, this.toTitleScreen, this);
    },
    toTitleScreen: function(){
        this.game.state.start('titleScreen');
    }
}
