/*----- constants -----*/
const INITIAL_TIME = 30
/*----- app's state (variables) -----*/
// bool for game end
let timeRemaining = 0;
let gameOver = false;
let wireState = {
    blue: true,
    green: true,
    red: true,
    white: true,
    yellow: true
}

// array of wires that need to be clicked to win
let wirestoCut = []

/*----- cached element references -----*/


// reset button
resetButtonEl = null;
/*----- event listeners -----*/
// wires

function resetGame() {
    console.log('reset game!');
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded!');
    backgroundEl = document.querySelector('main');
    resetButtonEl = document.querySelector('#reset');
    resetButtonEl.addEventListener('click', resetGame);
});