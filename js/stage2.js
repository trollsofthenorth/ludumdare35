var stage2 = function(game){
    console.log("stage2");
};

stage2.prototype = {
    
    preload: function(){
        
    },
    create: function(){
        this.game.add.text(0,0, 'stage 2');
        setTimeout(function(){}, 5000);
        this.game.state.start('stage3');
    }
}
