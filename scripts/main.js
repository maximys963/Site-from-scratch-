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
function Greeting(){
    console.log("hello btn");
    button1.style.backgroundColor = "greenyellow"
}
function Back(){
    console.log("hello btn");
    button1.style.backgroundColor = "#50C3AF"
}
