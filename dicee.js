
var  randomNumber1 = Math.ceil(Math.random()*6);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSources = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSources);

let randomNumber2 = Math.ceil(Math.random()*6);

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage;


document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){

 document.querySelector("h1").textContent =  "🚩 Player 1 Wins!";
    
}else if (randomNumber1<randomNumber2){

document.querySelector("h1").textContent =  "🚩 Player 2 Wins!";

}else {


    document.querySelector("h1").innerHTML =  "🚩 Draw!";
}




