class form{
    constructor(){
        this.input=createInput("Please Enter Email");
        this.button=createButton("Take survey");
        this.title=createElement('h2');
    }
    display(){
        this.title.html("Confidential Survey");
        this.title.position(displayWidth/2-150,0);
        this.input.position(displayWidth/2-150,displayHeight/2-100);
        this.button.position(displayWidth/2,displayHeight/2-100);
        getno();
        this.button.mousePressed(()=>{
            console.log(no);
            email=this.input.value();
            update(no,email);
            updateno(no+1);
        });
    }
    hide(){
        this.title.hide();
        this.button.hide();
        this.input.hide();
    }
}
