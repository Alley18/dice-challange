
function changeImg(){
var rannum1 = Math.random();
rannum1 = Math.floor(rannum1 * 6) +1;

var rannum2 = Math.random();
rannum2 = Math.floor(rannum2 * 6) +1;

var pic1 = document.querySelectorAll("img");

pic1[0].src = ("images/dice" + rannum1 + ".png");

pic1[1].src = ("images/dice" + rannum2 + ".png");

if(rannum1 > rannum2){
    document.querySelector("h1").innerHTML = "congrats player1 won!";
}else{
    document.querySelector("h1").innerHTML = "congrats player2 won!";
}

}

window.addEventListener('load', changeImg);

