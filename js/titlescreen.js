var titleScreen = function(game){
    console.log("titleScreen");
};

titleScreen.prototype = {
    
    preload: function(){
        
    },
    create: function(){
        // Title
        var style = { font: "bold 32px Arial", fill: "#fff"};
        var text = this.game.add.text(100, 280, "You are the soup...", style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        
        
        var text = this.game.add.text(100, 50, "Debug", {fill: '#FFFFFF' });
        var button = this.game.add.button(250,50, 'advancebutton', this.toTestStage, this);
        
        var text = this.game.add.text(100, 150, "Would you like to play a game?", {fill: '#FFFFFF' });
        var button = this.game.add.button(550,150, 'advancebutton', this.toStage1, this);
    },
    toTestStage: function(){
        this.game.state.start('testStage');
    },
    toStage1: function(){
        this.game.state.start('stage1');
    },
}
