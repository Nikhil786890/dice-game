var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage ="images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage);
//here we are giving index after queryselector all because it gives a array of the tags of img type

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomimage2="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins!";

}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="its a draw";
}

