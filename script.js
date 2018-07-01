var white = function(){
  document.querySelector('body').style.backgroundColor = 'white';
  window.setTimeout(black, 10);
};
var black = function(){
  document.querySelector('body').style.backgroundColor = 'black';
  window.setTimeout(white, 10);
};
document.addEventListener('DOMContentLoaded', black, false);
