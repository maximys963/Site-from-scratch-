// var thirdButtons = document.getElementsByClassName("third-button");
// thirdButtons.addEventListener("mouseover", ChangeColor);
// function ChangeColor (){
//     for(var i=0; i<thirdButtons.length; i++){
//         thirdButtons[i].style.backgroundColor = "greenyellow";
//     }
//
// }
//





var button1 = document.getElementById("btn1");
button1.addEventListener("mouseover", Greeting);
button1.addEventListener("mouseout",Back);
button1.addEventListener("mousedown",OnMousedown);
button1.addEventListener("mouseup",OnMouseup);
function Greeting(){
    console.log("hello btn");
    button1.style.backgroundColor = "#ADFF2F"
    button1.style.transitionDuration = "0.6s";

}
function Back(){
    console.log("hello btn");
    button1.style.backgroundColor = "#50C3AF"
    button1.style.transitionDuration = "0.6s";
}
function OnMousedown(){
    console.log("hello btn");
    button1.style.backgroundColor = "#98FB98"
    button1.style.transitionDuration = "0.1s";
}
function OnMouseup () {
    console.log("hello btn");
    button1.style.backgroundColor = "#ADFF2F"
    button1.style.transitionDuration = "0.5s";
}