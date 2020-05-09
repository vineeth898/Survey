var gameposition=0;
var no;
var email;
var state=0;
function setup(){
    createCanvas(displayWidth,displayHeight-75);
    Form=new form();
    Survey=new survey();
    Endsheet=new endsheet();
}
function draw(){
    background(220,220,220);
   if(state===0){
    Form.display();
    }
    if(state===1){
    Form.hide();
    Survey.display();
    }
    if(state===3){
    Endsheet.display();
    }
    if(state===5){
    Form.hide();
    textSize(30);
    Form.hide();
    text("Sorry Folk but the survey is over",displayWidth/2-200,displayHeight/2);
    }
    console.log(state);
}
function update(a,b){
    if(a===1){
    firebase.database().ref('pl1').update({
        email:b
        });
        state=1;
    }
    else if(a===2){
    firebase.database().ref('pl2').update({
        email:b
        });
        state=1;
    }
    else if(a===3){
    firebase.database().ref('pl3').update({
        email:b
            });
            state=1;
    }
    else if(a===4){
    firebase.database().ref('pl4').update({
        email:b
            });
            state=1;
    }
    if(a>=5){
        state=5;
    }
}
function getno(){
    var noo=firebase.database().ref('no');
    noo.on("value",function(data){
        no=data.val();
    })
}
function updateno(n){
    firebase.database().ref('/').update({
        no:n
    });
}
function updateopt(a){
    if(no-1===1){
        firebase.database().ref('pl1').update({
           opt:a
            });
            
        }
        else if(no-1===2){
        firebase.database().ref('pl2').update({
            opt:a
            });
            
        }
        else if(no-1===3){
        firebase.database().ref('pl3').update({
            opt:a
                });
               
        }
        else if(no-1===4){
        firebase.database().ref('pl4').update({
            opt:a
                });
            
        }
}