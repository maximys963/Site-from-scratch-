var buttons = document.getElementsByClassName("third-button");
// button це типу масив в який зібрав всі ноди (теги) з классом third-button
for(var i=0; i<buttons.length; i++){

    buttons[i].addEventListener("mouseover", Greeting);
    buttons[i].addEventListener("mouseout",Back);
    buttons[i].addEventListener("mousedown",OnMousedown);
    buttons[i].addEventListener("mouseup",OnMouseup);

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
// безпосердньо функції, які спрацьовують на 4 стани кнопки, this зберігає адресу на потрібну ноду (тег)
