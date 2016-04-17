var creditsScreen = function(game){
    console.log("creditsScreen");
};

creditsScreen.prototype = {
    
    preload: function(){
    },
    create: function(){
        var line1 = this.game.add.text(100, 50, "This game brought to you by TrollsOfTheNorth", {fill: '#FFFFFF' });
        var line2 = this.game.add.text(120, 100, "https://github.com/trollsofthenorth/ludumdare35", {fill: "#FFFFFF"});
        this.game.time.events.add(Phaser.Timer.SECOND * 10, this.toTitleScreen, this);
    },
    toLoadScreen: function(){
        this.game.state.start('titleScreen');
    }
}