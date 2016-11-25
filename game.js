var colors = genreateRandomColors(6);
            
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var color = document.querySelector("#color");
var button = document.querySelector("#newColors");
var h1 = document.querySelector("h1");
var correctColor = randomNumber();
color.textContent = correctColor ;

button.addEventListener("click",function(){
    //generate random colors
    colors = genreateRandomColors(6);
    //pick a correctColor
    correctColor = randomNumber();
    //set RGB in heading to correctColor
    color.textContent = correctColor ;
    //set new colors to squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    }
});

for(var i = 0; i<squares.length; i++){
    //add initial colors to the squares
    squares[i].style.background = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    var clickedColor = this.style.background ;
    if(clickedColor === correctColor)
        {
        console.log(clickedColor,correctColor);
        changeColor(clickedColor);
        message.textContent = "Correct";
        h1.style.background = correctColor ;
        }
    else{
        this.style.background = "#232323";
        message.textContent = "Try Again";

        }
    });

}

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
    
}

function randomColors(){
    //select red from 0-255
    var red = Math.floor(Math.random() * 256)
    //select green from 0-255
    var green = Math.floor(Math.random() * 256)
    //select blue from 0-255
    var blue = Math.floor(Math.random() * 256)
    
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color ;
}

function genreateRandomColors(num){
    var colors = [] ;
    //loop num times
    for(var i = 0; i< num ; i++){
        //add random colors to array
        colors.push(randomColors());
    }
    return colors ;
}

function randomNumber(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random] ;
}

