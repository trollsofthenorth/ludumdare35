var stage1 = function(game){
    console.log("stage1");
};

stage1.prototype = {
    
    preload: function(){
        
    },
    create: function(){
        this.game.add.text(0,0, 'stage 1');
        setTimeout(function(){}, 5000);
        this.game.state.start('stage2');
    }
}
