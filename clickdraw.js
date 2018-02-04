//Donia Tung
//SoftDev2 pd7
//2018-02-03

//retrieve node in DOM via ID
var c = document.getElementById("slate");
  //instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var q = 0;

  var circle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.beginPath()
    ctx.arc(x,y, 10, 0, 2*Math.PI)
    ctx.stroke()
  }

var rect = function(e){
  var x = e.offsetX;
  var y = e.offsetY;
  ctx.fillRect(x,y, 10, 10)
}



var draw = function(e){
  var x = e.offsetX;
  var y = e.offsetY;
  if (q == 0){
    ctx.beginPath()
    ctx.arc(x,y, 10, 0, 2*Math.PI)
    ctx.stroke()
  }
  else{
    ctx.fillRect(x,y, 10, 10)
  }
}
c.addEventListener("click", draw);

document.getElementById('toggle').onclick = function(){
  if (q == 0){
    q = 1;
  }
  else{
    q = 0;
  }
}

var erase = function(e){
  e.preventDefault();
  ctx.clearRect(0, 0, c.width, c.height)
}

var clear = document.getElementById("clear")
clear.addEventListener("click", erase);
