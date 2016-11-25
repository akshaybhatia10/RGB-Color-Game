var mode = 6
var colors = genreateRandomColors(mode);
            
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var color = document.querySelector("#color");
var reset = document.querySelector("#newColors");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var correctColor = randomNumber();
color.textContent = correctColor ;



easy.addEventListener("click",function(){
    reset.textContent = "NEW COLORS";
    easy.classList.add("selected");
    hard.classList.remove("selected");
    mode = 3 ;
    //Genreate 3 colors
    colors = genreateRandomColors(mode);
    //Select one color out of 3 to play
    correctColor = randomNumber();
    color.textContent = correctColor;
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue" ;

});

hard.addEventListener("click",function(){    
    reset.textContent = "NEW COLORS";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    mode = 6;
    //Genreate 6 colors
    colors = genreateRandomColors(mode);
    //Select one color out of six to play
    correctColor = randomNumber();
    color.textContent = correctColor;
    for(var i =0;i<squares.length;i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.background = "steelblue";
});

reset.addEventListener("click",function(){
    //set message to empty string
    message.textContent = "";
    //change text to new Colors
    reset.textContent = "NEW COLORS";
    //set background color for heading to default
    h1.style.background = "steelblue";
    //generate random colors
    colors = genreateRandomColors(mode);
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
    //get the clicked square
    var clickedColor = this.style.background ;
    //check if clicked square is correct 
    if(clickedColor === correctColor)
        {
        console.log(clickedColor,correctColor);
        changeColor(clickedColor);
        message.textContent = "Correct!";
        h1.style.background = correctColor ;
        reset.textContent = "Play Again?"
        }
    else{
        this.style.background = "#232323";
        message.textContent = "Try Again!";

        }
    });

}

//To change all squares to same color 
function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
    
}

//Generate random rgb values
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

//genreate num colors
function genreateRandomColors(num){
    var colors = [] ;
    //loop num times
    for(var i = 0; i< num ; i++){
        //add random colors to array
        colors.push(randomColors());
    }
    return colors ;
}

//Select a single color to play
function randomNumber(){
    //Genreate number between 0-3 or 0-6 
    var random = Math.floor(Math.random() * colors.length);
    return colors[random] ;
}

