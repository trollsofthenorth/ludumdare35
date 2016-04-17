var defeatScreen = function(game){
    console.log("defeatScreen");
};

defeatScreen.prototype = {
    
    preload: function(){
        
    },
    create: function(){
        var text = this.game.add.text(100, 50, "You Lose", {fill: '#FFFFFF' });
        this.game.time.events.add(Phaser.Timer.SECOND * 5, this.toTitleScreen, this);
    },
    toLoadScreen: function(){
        this.game.state.start('titleScreen');
    }
}
