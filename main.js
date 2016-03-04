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
var cell;
var symbol = 'X';
var numOfMoves = 0;
var xCount = 0;
var oCount = 0;
var tieCount = 0;
currentMove = "X";

function changeBox(cell) {
  if (cell.value == "") {
    cell.value = symbol;
    numOfMoves++;
    document.currentMove.value = currentMove;
  }
    else {
    alert("This box is already selected! Please select another box!");
  }

  if(checkWin()) {
    alert("Player " + cell.value + "wins!");
    if (symbol == "X") {
      xCount++;
    document.currentMove.value = xCount;
    }
    else {
      oCount++;
      document.currentMove.value = oCount;
    }
    clearBtn (); // -- needs to define
    return;
  }

  if(numOfMoves == 9) {
    alert("It's a tie!");
    tieCount++;
    document.currentMove.value = tieCount;
  }
    else {
      changeSymbol(); //--needs to define
    }
}

function changeSymbol() {
  if(symbol == "X") {
    symbol == "O";
    currentMove = "O"
  }
  else {
    symbol = "X";
    currentMove = "X";
  }
}

funciton checkWin() {
  if((s1.value == "X") && (s2.value == "X") && (s3.value == "X"))
    return true;
  else if ((s4.value == "X") && (s5.value == "X") && (s6.value == "X"))
    return true;
  else if ((s7.value == "X") && (s8.value == "X") && (s9.value == "X"))
    return true;
  else if ((s1.value == "X") && (s4.value == "X") && (s7.value == "X"))
    return true;
  else if ((s2.value == "X") && (s5.value == "X") && (s8.value == "X"))
    return true;
  else if ((s3.value == "X") && (s6.value == "X") && (s9.value == "X"))
    return true;
  else if ((s1.value == "X") && (s5.value == "X") && (s9.value == "X"))
    return true;
  else if ((s3.value == "X") && (s5.value == "X") && (s7.value == "X"))
    return true;


  else if ((s4.value == "O") && (s5.value == "O") && (s6.value == "O"))
    return true;
  else if ((s7.value == "O") && (s8.value == "O") && (s9.value == "O"))
    return true;
  else if ((s1.value == "O") && (s4.value == "O") && (s7.value == "O"))
    return true;
  else if ((s2.value == "O") && (s5.value == "O") && (s8.value == "O"))
    return true;
  else if ((s3.value == "O") && (s6.value == "O") && (s9.value == "O"))
    return true;
  else if ((s1.value == "O") && (s5.value == "O") && (s9.value == "O"))
    return true;
  else if ((s3.value == "O") && (s5.value == "O") && (s7.value == "O"))
    return true;

}

function clearBtn() {

}








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
