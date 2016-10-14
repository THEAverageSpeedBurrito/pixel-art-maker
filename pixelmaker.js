'use strict';

var main = document.getElementById('canvas');
var brushColor = 'red';

//Create Pixels
function createCanvas () {
  for(var x = 0; x < 3200; x++){
    var pixel = document.createElement('div');
    var newId = 'a' + x;
    pixel.setAttribute('class', 'pixel');
    pixel.id = newId;

    main.appendChild(pixel);
  }
}
createCanvas();

function reset () {
  while(main.hasChildNodes()){
    main.removeChild(main.firstChild);
  }
  createCanvas();
}

//main paint event listener
main.addEventListener('mousedown' , function(event){
  var id = event.target.id;
  paint(id);
  var drawing = true;
  main.addEventListener('mouseup', function() {
    drawing = false;
  });
  main.addEventListener('mouseover', function(event) {
    if(drawing) {
      id = event.target.id;
      paint(id);
    }
  });
});

function paint (id) {
  var toChange = document.getElementById(id);
  if(id.startsWith('a')){
    toChange.style.backgroundColor = brushColor;
    toChange.style.border = brushColor;
  }
}

//Color selection functionality
var colors = document.getElementById('colors');
var button = document.getElementById('currentColor');

colors.addEventListener('click', function(event) {
  var color = event.target.id;
  if(color !== 'colors') {
    brushColor = color;
    button.style.backgroundColor = color;
    if(color === 'black'){
      button.style.color = 'white';
    }else{
      button.style.color = 'black'
    }
  }
});

var colorsStr = 'red,blue,green,yellowgreen,seagreen,springgreen,limegreen,lime,yellow,orange,darkorange,aqua,darkturquoise,coral,fuchsia,blueviolet,darkviolet,deeppink,royalblue,slateblue,slategray,chocolate,darkgoldenrod,goldenrod,saddlebrown,sandybrown,brown,skyblue,orangered,firebrick,black,white';
var colors = colorsStr.split(',');

var colorsBar = document.getElementById('colors');

for(var i = 0; i < colors.length; i++){
  var newColor = document.createElement('div');
  newColor.setAttribute('class', 'color');
  newColor.style.backgroundColor = colors[i];
  newColor.id = colors[i];

  colorsBar.appendChild(newColor);
}
