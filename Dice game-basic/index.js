

var randomNumber1=(Math.floor(Math.random()*6))+1;
var doc="dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src","images/"+doc);

var randomNumber2=(Math.floor(Math.random()*6))+1;
var doc2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src","images/"+doc2);
//document.querySelector("dice").setAttribute("dice4.png");


if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 is the winner 🏆";
}
else if(randomNumber2<randomNumber1){
    document.querySelector("h1").innerHTML="🏆 Player1 is the winner";
}
else{
    ocument.querySelector("h1").innerHTML="Draw";
}

// }document.querySelector("h1").setAttribute("Player2 is the winner")