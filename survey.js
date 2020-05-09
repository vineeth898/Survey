class survey{
    constructor(){
        this.question=createElement('h2');
        this.opt1=createButton('Agree');
        this.opt2=createButton('disagree');
    }
    display(){
        this.question.html("History should be banned");
        this.question.position(displayWidth/2-100,displayHeight/2-130);
        this.opt1.position(displayWidth/2-100,displayHeight/2-50);
        this.opt2.position(displayWidth/2-100,displayHeight/2-70);
        this.opt1.mousePressed(()=>{
            updateopt("yes");
            state=3;
         this.question.hide();
        this.opt2.hide();
        this.opt1.hide();
        });
        this.opt2.mousePressed(()=>{
            updateopt("no");
            state=3;
        this.question.hide();
        this.opt2.hide();
        this.opt1.hide();
        });
    }
}