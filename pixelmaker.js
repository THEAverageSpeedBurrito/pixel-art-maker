'use strict';

var main = document.getElementById('canvas');
var brushColor = 'black';
var erasing = false;
var pixelCount = 0;

//Canvas is laid out
function createCanvas () {
  pixelCount = 0;
  for(var x = 0; x < 3200; x++){
    var pixel = document.createElement('div');
    var newId = 'ID' + x;
    pixel.setAttribute('class', 'pixel');
    pixel.id = newId;

    main.appendChild(pixel);
    pixelCount++;
  }
}

//Canvas is Initialized
createCanvas();

//handles the 'painting' of divs
function paint (id) {
  var toChange = document.getElementById(id);
  if(id.startsWith('ID')){
    if(erasing){
      toChange.style.backgroundColor = 'white';
      toChange.style.border = '1px solid gainsboro';
    }else{
      toChange.style.backgroundColor = brushColor;
      toChange.style.border = brushColor;
    }
  }
}

//removes all the child nodes from the canvas
function reset () {
  while(main.hasChildNodes()){
    main.removeChild(main.firstChild);
  }
  //paints a new canvas
  createCanvas();
}

function addRow () {
  for(var x = 0; x < 80; x++) {
    var pixel = document.createElement('div');
    var newId = 'ID' + pixelCount;
    pixel.setAttribute('class', 'pixel');
    pixel.id = newId;

    main.appendChild(pixel);
    pixelCount++;
  }
}

//main paint event listener
main.addEventListener('mousedown' , function(event){
  var id = event.target.id;
  paint(id);
  var drawing = true;
  //Listens for the id's of all the divs it rolls over
  main.addEventListener('mouseover', function(event) {

    if(drawing) {
      id = event.target.id;
      paint(id);
    }

  });
  //ends the string of painted squares | mousedown function is completed
  main.addEventListener('mouseup', function() {
    drawing = false;
  });

});

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

//List of colors to be converted to an array
var colorsStr = 'red,blue,green,yellowgreen,seagreen,springgreen,limegreen,lime,yellow,orange,darkorange,aqua,darkturquoise,coral,fuchsia,blueviolet,darkviolet,deeppink,royalblue,slateblue,slategray,chocolate,darkgoldenrod,goldenrod,saddlebrown,sandybrown,brown,skyblue,orangered,firebrick,black,white';
var colors = colorsStr.split(',');

//Created the colors bar
var colorsBar = document.getElementById('colors');

//added each color to the color bar
for(var i = 0; i < colors.length; i++){
  var newColor = document.createElement('div');
  newColor.setAttribute('class', 'color');
  newColor.style.backgroundColor = colors[i];
  newColor.id = colors[i];

  colorsBar.appendChild(newColor);
}

//listens for the press of the 'e' key
window.addEventListener('keypress', function(event){
  var eraseText = document.getElementById('erasing');

  if(event.keyCode === 101){
    if(erasing){
      eraseText.innerText = "Press 'e' to toggle erasing"
      erasing = false;
    }else{
      eraseText.innerText = "Eraser active. Press 'e' to turn off";
      erasing = true;
    }
  }
});
