class endsheet{
    constructor(){
        this.info=createElement('h3');
    }
    display(){
        this.info.html('The results');
        this.info.position(displayWidth/3,displayHeight/4);

        var noo=firebase.database().ref('pl1/opt');
        noo.on("value",function(data){
            var a=data.val();
            text(a,500,300);
        });
        
        var nooo=firebase.database().ref('pl2/opt');
    nooo.on("value",function(data){
        var a=data.val();
        text(a,500,350);
    });
    var nooq=firebase.database().ref('pl3/opt');
    nooq.on("value",function(data){
        var a=data.val();
        text(a,500,400);
    });
    var nooqw=firebase.database().ref('pl4/opt');
    nooqw.on("value",function(data){
        var a=data.val();
        text(a,500,450);
    });
    }
}