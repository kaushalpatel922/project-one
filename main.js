var gameRunning = false;
var turn = 0;
var squaresFilled = 0;
var s1;
var s2;
var s3;
var s4;
var s5;
var s6;
var s7;
var s8;
var s9;

var playButton = document.querySelector("#playTTT");
playButton.addEventListener("click", function (){
  // tttGame.play();
  alert("Welcome to Tic Tac Toe!");
});


var tttGame = {
  winningCombinations: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
  boxdivs: document.querySelectorAll(".box"),
  userSelection: undefined,
}

var boxOne = document.querySelector("#boxOne");
boxOne.addEventListener("mouseover", function () {
  this.innerHTML = "Hello World";
  for (var i = 0; i < 1; i++) {
    this.innerHTML = "";
  }
});
