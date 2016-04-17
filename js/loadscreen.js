var loadScreen = function(game){
    console.log("loadScreen");
};

loadScreen.prototype = {
    preload: function(){
        this.game.load.image('advancebutton', 'assets/images/advancebutton-02.png');
    },
    create: function(){
        var style = { font: "bold 32px Arial", fill: "#fff"};
        var text = this.game.add.text(100, 280, "You are the soup...", style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        this.game.time.events.add(Phaser.Timer.SECOND * 1, this.toTitleScreen, this);
    },
    toTitleScreen: function(){
        this.game.state.start('titleScreen');
    }
}
