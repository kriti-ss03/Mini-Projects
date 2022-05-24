//DETECTING ONCLICK-----------------------------------------
for(var i=0;i<(document.querySelectorAll(".drum").length);i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  // function handleclick(){ 
      var dbutton=this.innerHTML;
      makeSomeNoise(dbutton);
     
      buttonAnimation(dbutton);
    }
 ); 
}

//DETECTING KEYPRESS-----------------------------------------
document.addEventListener("keypress",function(event){
  makeSomeNoise(event.key);

  buttonAnimation(event.key);
} ); 


//WHAT TO DO WHEN THE ACTION GOES------------------
function makeSomeNoise(value){
switch(value){
  case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

  case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();           
    break;

  case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

  case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

  case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

  case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

  case "l":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;


  default: console.log(dbutton);

}
}


function buttonAnimation(currentKey){
  var presentKey= document.querySelector("."+currentKey);
 presentKey.classList.add("pressed");

 setTimeout(function(){
   presentKey.classList.remove("pressed");
  },100);
 }


// document.querySelectorAll(".drum")[0].addEventListener("click",audio);
// function audio(){
// var a=new Audio("sounds/.mp3");
// a.play();
// }