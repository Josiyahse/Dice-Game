//Creating random number for each dice
var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);
//Function that return a string how is a link various depend of the random number return
function replace1(){
    randomNumber1;
    var source = "/images/dice"+randomNumber1+".png";
    return source;
}
function replace2(){
    randomNumber2;
    var source = "/images/dice"+randomNumber2+".png";
    return source;
}
//Applying the Changing in my HTML file
document.getElementsByClassName("img1")[0].setAttribute("src",replace1());

document.getElementsByClassName("img2")[0].setAttribute("src",replace2());
//Setting the return messagei in the h1 in my html file 
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩Player 1 win !";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 win !🚩";
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML= "Dawn !";
}
