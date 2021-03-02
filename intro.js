function setup() {
   createCanvas(800,800) 
    button= createButton("PLAY")
    button.position(600, 600)
}

function draw() {
   background("blue")

   fill("white")
   textSize(30)
   text("Global warming is a big threat to penguins.", 50,120)
   text("Help this penguin reach the new island in 90 seconds!", 50,150)
   text("Hurry up or this island will melt!", 50, 180)
   text("Collect fish to increase your score!", 50,210) 
   text("Dodge the seals or they will eat you! Good luck!", 50, 240)
   

   button.mousePressed(function() {
       location.replace("second.html")
   })
   drawSprites()
}