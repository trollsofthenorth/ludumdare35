var stage3 = function(game){
    console.log("stage3");
};

stage3.prototype = {
    
    preload: function(){
        
    },
    create: function(){
        this.game.add.text(0,0, 'stage 3');
        setTimeout(function(){}, 5000);
        this.game.state.start('creditsScreen');
    },
}
