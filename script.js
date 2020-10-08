var player = null;
var playerSelected = document.getElementById(elementid = 'player-selected');

changePlayer(value = 'X');

function chooseSquare(id) {
    var square = document.getElementById(id);

    square.innerHTML = player;
    square.style.color = '#000';
}

function changePlayer(value) {
    player = value;
    playerSelected.innerHTML = player;
}