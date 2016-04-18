var titleScreen = function(game){
    console.log("titleScreen");
};

titleScreen.prototype = {
    
    preload: function(){
        
        
    },
    create: function(){
        
        // Intro image add.
        this.game.add.tileSprite(0,0,800,600,'intro');
        
        // Button for test stage.
        //var button = this.game.add.button(0, 0, 'start-button', this.toTestStage, this);
        
        // Button for first stage.
        var button = this.game.add.button(((game.camera.width /2) -64),450, 'start-button', this.toStage1, this);
        
        var style = { font: "bold 15px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        var text = this.game.add.text(((game.camera.width /2) -100), 350, "Press <space> to shapeshift\nPress <up>, <down>. <left>, or <right> to move\nEat like shapes\nAvoid different shapes", style);
        //var credits_button = this.game.add.button(((game.camera.width/2)-64),game.camera.height-100), 'unknown', this.toCredits, this);
    },
    toTestStage: function(){
        this.game.state.start('stage6');
    },
    toStage1: function(){
        this.game.state.start('stage1');
    },
    toCredits: function(){
        this.game.state.start('creditsScreen');
    }
}
