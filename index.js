var a= document.querySelectorAll(".drum");
var sounds=["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];
var keys=["w","a","s","d","j","k","l"];

//Detecting On-screen button press
for(let i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        makeSound(a[i].innerHTML);
        buttonAnimation(a[i].innerHTML);
    });
}

//Detecting Keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(keyPressed){
    var active =document.querySelector("."+keyPressed);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },200);
}

function makeSound(key){
    switch (key) {
        case "w":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio2= new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;

        case "s":
            var audio3= new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        
        case "d":
            var audio4= new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;

        case "j":
            var audio5= new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        
        case "k":
            var audio6= new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        
        case "l":
            var audio7= new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;

        default:
            break;
    }
}