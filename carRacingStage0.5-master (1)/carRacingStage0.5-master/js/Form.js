class Form {
  constructor() {
     this.input = createInput("Name");
this.button = createButton('Play');   
  }
 hide(){
   this.input.hide()
   this.button.hide()
 }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);
    
    
    
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

       player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + player.name )
      greeting.position(displayWidth/2-70, displayHeight/4)
      
    });

  }
}
