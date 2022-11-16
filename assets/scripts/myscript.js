console.log('hello');
// jquery:
// $( document ).ready(function() {
//     console.log( "ready!" );
// });


var leftItem = document.getElementById('item0'),

    rightItem = document.getElementById('item1');

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();



// Get the navbar
const container=document.getElementById('container');

// Get the offset position of the navbar
const sticky = 0;
const total = container.offsetTop+ container.offsetHeight-50;

// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.


window.addEventListener("optimizedScroll", function(){
  

  if (window.pageYOffset >= sticky && window.pageYOffset <= total) {

   
    leftItem.style.transform ="translate("+(window.pageYOffset/ total)*10+ "%)";
  
  rightItem.style.transform = "translate(-"+(window.pageYOffset/ total)*10 + "%";

//console.log(`curr ${window.pageYOffset/ total}%`);
  }  if(window.pageYOffset < sticky ){
    leftItem.style.transform ="translate("+0+ "%)";
  rightItem.style.transform = "translate(-"+0+ "%)";
  }else if(window.pageYOffset > total) {
    leftItem.style.transform ="translate("+100+ "%)  100ms";
  
  rightItem.style.transform = "translate(-"+100+ "%) 100ms";
  }
})

// vanilla js: 
// window.onload = function () {
//     // do the work after everything was loaded (DOM, media elements)
//     console.log('window loaded');
