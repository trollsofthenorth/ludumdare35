var creditsScreen = function(game){
    console.log("creditsScreen");
};

creditsScreen.prototype = {
    
    preload: function(){
    },
    create: function(){
        var line1 = this.game.add.text(50, 50, "This game brought to you by TrollsOfTheNorth\n", {fill: '#FFFFFF' });
        var line2 = this.game.add.text(50, 100, "https://github.com/trollsofthenorth/ludumdare35", {fill: "#0000FF"});
        this.game.time.events.add(Phaser.Timer.SECOND * 5, this.toTitleScreen, this);
        
        line2.inputEnabled = true;
        line2.input.enableDrag();
        line2.events.onInputDown.add(this.clickdown, this);
        
    },
    clickdown: function(){
        window.location = "https://github.com/trollsofthenorth/ludumdare35";
    },
    toTitleScreen: function(){
        this.game.state.start('titleScreen');
    }
}