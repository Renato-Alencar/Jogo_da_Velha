var player = null;
var playerSelected = document.getElementById(elementId = 'player-selected');
var squares = document.getElementsByClassName(className = 'square');

changePlayer(value = 'X');

function chooseSquare(id) {
    var square = document.getElementById(id);
    if(square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if(player === 'X') {
        player = 'O';
    }
    else {
        player = 'X';
    }
    changePlayer(player);
}

function changePlayer(value) {
    player = value;
    playerSelected.innerHTML = player;
}

function checkWinner() {
    var square1 = document.getElementById(elementId = 1);
    var square2 = document.getElementById(elementId = 2);
    var square3 = document.getElementById(elementId = 3);
    var square4 = document.getElementById(elementId = 4);
    var square5 = document.getElementById(elementId = 5);
    var square6 = document.getElementById(elementId = 6);
    var square7 = document.getElementById(elementId = 7);
    var square8 = document.getElementById(elementId = 8);
    var square9 = document.getElementById(elementId = 9);
}

function checkSequence() {
    
}