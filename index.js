//document.querySelector("button").addEventListener('click',handleClick)
// here we do not add parenthesis in fuction cause if we do so then function gets called instantly
/*function handleClick()
{
    alert(" I was clicked");
}*/ 
/*var numDumBut=document.querySelectorAll(".drum").length;
for(var i=0;i< numDumBut;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
    alert("i got clicked");
    });
}*/
/*var numDumBut=document.querySelectorAll(".drum").length;
for(var i=0;i< numDumBut;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
    var audio1=new Audio('sounds/tom-1.mp3');
    audio1.play();
    });
}*/
var numDumBut = document.querySelectorAll(".drum").length;
for (var i = 0; i < numDumBut; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function () {
    var buttoninnerHtml = this.innerHTML;
    switch (buttoninnerHtml) {
      case "w":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "d":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "j":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
        break;
    }
  });
}
