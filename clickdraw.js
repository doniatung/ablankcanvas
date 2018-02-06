//Donia Tung
//SoftDev2 pd7
//2018-02-05

//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");
//declare variables
var shape = 0;
var x, y;
var oldx;
var oldy;

//draw function
var draw = function(e){
  e.preventDefault();
  x = e.offsetX;
  y = e.offsetY;
  if (shape == 0){
    ctx.beginPath();
    ctx.arc(x,y, 10, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.moveTo(oldx, oldy);
    ctx.lineTo(x,y);
    ctx.stroke();
    oldx = x;
    oldy = y;
  }
  else{
    ctx.fillRect(x,y, 30, 30);
  }
}

//adding event listener to the canvas
c.addEventListener("click", draw);
//toggle function
document.getElementById('toggle').onclick = function(){
  if (shape == 0){
    shape = 1;
  }
  else{
    shape = 0;
  }
}
//clear function
var erase = function(e){
  e.preventDefault();
  ctx.clearRect(0, 0, c.width, c.height)
}
//adding event listener to the clear button
var clear = document.getElementById("clear")
clear.addEventListener("click", erase);
