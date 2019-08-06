
var colors = [];
var squares = document.querySelectorAll(".square");
var btnPlay = document.querySelector("#btn_play");
var btnEasy = document.querySelector("#btn_easy");
var btnHard = document.querySelector("#btn_hard");

function generateColors(num_sqr) {
  for(var i=0; i<num_sqr; i++)
  {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    colors[i]  = "rgb("+red+", "+green+", "+blue+")";
  }
}

generateColors(6);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var goalColor = colors[getRandomInt(5)];
var goalDispVar = document.querySelector("#goal_disp");
var msgDispVar = document.querySelector("#msg_disp");
goalDispVar.textContent = goalColor.toUpperCase();

for(var i =0; i< squares.length; i++)
{
  // add colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click event listeners to each square
  squares[i].addEventListener("click", function(){
    if(this.style.backgroundColor == goalColor)
    {
      // alert("Correct Answer");
      for(var i=0; i<squares.length; i++)
      {
        squares[i].style.backgroundColor = goalColor;
      }
      document.querySelector("h1").style.backgroundColor = goalColor;
      msgDispVar.textContent = "Correct!";
      document.querySelector("#btn_play").textContent = "PLAY AGAIN";
    }
    else {
      // alert("Wrong Answer");
      this.style.backgroundColor = "#232323";
      msgDispVar.textContent = "Try Again!";
    }
  })
}

btnPlay.addEventListener("click", function(){
  //generate new colors
  //set display color
  //check and do the whole thingy
  location.reload();
  //lulz I just reloaded the whole page preserving document cache :P
})

btnEasy.addEventListener("click", function(){
  btnHard.classList.remove("selected");
  btnEasy.classList.add("selected");
  btnEasy.style.color = "white";
  btnHard.style.color = "steelblue";

  generateColors(3);
  goalColor = colors[getRandomInt(2)];
  goalDispVar.textContent = goalColor.toUpperCase();

  for(var i =0; i< 3; i++)
  {
    squares[i].style.backgroundColor = colors[i];
  }
  var removables = document.getElementsByName("removable");
  removables.forEach(function(sqr){
    sqr.style.display = "none";
  })
})

btnHard.addEventListener("click", function(){
  btnEasy.classList.remove("selected");
  btnHard.classList.add("selected");
  btnHard.style.color = "white";
  btnEasy.style.color = "steelblue";
  generateColors(6);
  goalColor = colors[getRandomInt(5)];
  goalDispVar.textContent = goalColor.toUpperCase();

  for(var i =0; i< 6; i++)
  {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "inherit";
  }
})

  btnEasy.addEventListener("mouseOver", function(){
    btnEasy.style.color = "white";
  })
  btnHard.addEventListener("mouseOver", function(){
    btnHard.style.color = "white";
  })
