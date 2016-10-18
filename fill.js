'use strict';

var canvas = document.getElementById('canvas');
var settlers = {};

function fillArea () {

}


canvas.addEventListener('click', function(event) {
  var clickedID = event.target.id;
  var colorClicked = clickedID.style.backgroundColor;

  if(clickedID.startsWith('ID')){
    getSettlers(clickedID);
  }

  fillArea();
});


function getSettlers (id) {
  var neighbors = {};

  function extractId (str){
    str = str.subString(2);
    return(parseInt(str));
  }

  function reverseId (num){
    return 'ID' + num;
  }

  var tL = reverseId(extractId(id)-81);
  var tT = reverseId(extractId(id)-80);
  var tR = reverseId(extractId(id)-79);

}
