var button_1 = document.getElementsByClassName("third-button");
// button це типу масив в який зібрав всі ноди (теги) з классом third-button
for(var i=0; i<button_1.length; i++){

    button_1[i].addEventListener("mouseover", Greeting);
    button_1[i].addEventListener("mouseout",Back);
    button_1[i].addEventListener("mousedown",OnMousedown);
    button_1[i].addEventListener("mouseup",OnMouseup);

// навішую на кожну ноду обработчик событий
}
function Greeting(){
    console.log("hello btn");
    this.style.backgroundColor = "#ADFF2F"
   this.style.transitionDuration = "0.6s";

}
function Back(){
    console.log("hello btn");
    this.style.backgroundColor = "#50C3AF"
   this.style.transitionDuration = "0.6s";
}
function OnMousedown(){
    console.log("hello btn");
    this.style.backgroundColor = "#98FB98"
    this.style.transitionDuration = "0.1s";
}
function OnMouseup () {
    console.log("hello btn");
    this.style.backgroundColor = "#ADFF2F"
    this.style.transitionDuration = "0.5s";
}
var button_2 = document.getElementsByClassName("fourth_button");
// button це типу масив в який зібрав всі ноди (теги) з классом third-button
for(var i=0; i<button_2.length; i++){

    button_2[i].addEventListener("mouseover", Greeting_2);
    button_2[i].addEventListener("mouseout",Back_2);
    button_2[i].addEventListener("mousedown",OnMousedown_2);
    button_2[i].addEventListener("mouseup",OnMouseup_2);

// навішую на кожну ноду обработчик событий
}
function Greeting_2(){
    console.log("hello btn");
    this.style.backgroundColor = "black"
   this.style.transitionDuration = "0.6s";

}
function Back_2(){
    console.log("hello btn");
    this.style.backgroundColor = "#d2d5da"
   this.style.transitionDuration = "0.6s";
}
function OnMousedown_2(){
    console.log("hello btn");
    this.style.backgroundColor = "gray"
    this.style.transitionDuration = "0.1s";
}
function OnMouseup_2 () {
    console.log("hello btn");
    this.style.backgroundColor = "black"
    this.style.transitionDuration = "0.5s";
}
// безпосердньо функції, які спрацьовують на 4 стани кнопки, this зберігає адресу на потрібну ноду (тег)
