/*29/08/2022 - დავალება - დავწეროთ კოდი რომლის დახმარებითც 
დივზე კლიკის შემდეგ დივი მიიღებს რენდომ ფერს*/

var div = document.querySelector(".mainContainer");
div.addEventListener("click",function(){
    document.querySelector(".mainContainer").style.backgroundColor = getRandomColor()
})
function getRandomColor() {
    var random1 = parseInt(Math.random()*255);
    var random2 = parseInt(Math.random()*255);
    var random3 = parseInt(Math.random()*255);  
   return "rgb"+"("+random1 +","+random2+","+random3+")";
}