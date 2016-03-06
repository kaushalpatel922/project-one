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
var currentMove = "X";


function changeBox (cell) {
    if (cell.value == "") {
        cell.value = symbol;
        numOfMoves++;
    }
    else {
        alert("This box is already selected! Please select another box!");
    }

    if (checkWin()) {
        alert("Player " + cell.value + " wins!");
        if (symbol == "X") {
            xCount++;
        } else {
            oCount++;
        }
        clearBtn();
        updateScore();
        return;
    }

    if (numOfMoves == 9) {
        alert("It's a tie!");
        tieCount++;
        clearBtn();
        return;
    }
        else {
        changeSymbol();
        }
}

function changeSymbol() {
    if (symbol == "X") {
        symbol = "O";
        currentMove = "O"
    } else {
        symbol = "X";
        currentMove = "X";
    }
}

function checkWin() {
    with(document.simpleForm) {
        if ((s1.value == "X") && (s2.value == "X") && (s3.value == "X"))
            return true;
        if ((s4.value == "X") && (s5.value == "X") && (s6.value == "X"))
            return true;
        if ((s7.value == "X") && (s8.value == "X") && (s9.value == "X"))
            return true;
        if ((s1.value == "X") && (s4.value == "X") && (s7.value == "X"))
            return true;
        if ((s2.value == "X") && (s5.value == "X") && (s8.value == "X"))
            return true;
        if ((s3.value == "X") && (s6.value == "X") && (s9.value == "X"))
            return true;
        if ((s1.value == "X") && (s5.value == "X") && (s9.value == "X"))
            return true;
        if ((s3.value == "X") && (s5.value == "X") && (s7.value == "X"))
            return true;

        if ((s1.value == "O") && (s2.value == "O") && (s3.value == "O"))
            return true;
        if ((s4.value == "O") && (s5.value == "O") && (s6.value == "O"))
            return true;
        if ((s7.value == "O") && (s8.value == "O") && (s9.value == "O"))
            return true;
        if ((s1.value == "O") && (s4.value == "O") && (s7.value == "O"))
            return true;
        if ((s2.value == "O") && (s5.value == "O") && (s8.value == "O"))
            return true;
        if ((s3.value == "O") && (s6.value == "O") && (s9.value == "O"))
            return true;
        if ((s1.value == "O") && (s5.value == "O") && (s9.value == "O"))
            return true;
        if ((s3.value == "O") && (s5.value == "O") && (s7.value == "O"))
            return true;
    }
}

function clearBtn() {
    document.simpleForm.s1.value = "";
    document.simpleForm.s2.value = "";
    document.simpleForm.s3.value = "";
    document.simpleForm.s4.value = "";
    document.simpleForm.s5.value = "";
    document.simpleForm.s6.value = "";
    document.simpleForm.s7.value = "";
    document.simpleForm.s8.value = "";
    document.simpleForm.s9.value = "";
    symbol = "X";
    numOfMoves = 0;
}

function erase() {
    xCount = 0;
    oCount = 0;
    tieCount = 0;
    alert("Nice!");
}

function updateScore() {
    if (xCount != 0) {
        var x = document.getElementById('scoreOne');
        x.innerHTML = xCount;
    }
    if (oCount != 0) {
        var y = document.getElementById('scoreTwo');
        y.innerHTML = oCount;
    }
}
