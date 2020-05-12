let main = document.querySelector('.main')
let playField = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
];

let gamSpeed = 400
function drow() {
    let = mainInnerhtml = '';

    for (let y = 0; y < playField.length; y++) {
        for (let x = 0; x < playField[y].length; x++) {
            if (playField[y][x] === 1) {
                mainInnerhtml += `<div class='cell moveingcell'></div>`;
            } else if (playField[y][x] === 2) {
                mainInnerhtml += `<div class='cell fixedcell'></div>`

            } else {
                mainInnerhtml += `<div class='cell'></div>`
            }
        }
    }
    main.innerHTML = mainInnerhtml
}
function canTetraMoveDown() {
    for (let y = 0; y < playField.length; y++) {
        for (let x = 0; x < playField[y].length; x++) {
            if (playField[y][x] === 1) {
                if (y === playField.length - 1 || playField[y + 1][x] === 2) {
                    return false
                }
            }
        }
    }
    return true
}


function moveTetroDom() {
    if (canTetraMoveDown()) {
        for (let y = playField.length - 1; y >= 0; y--) {
            for (let x = 0; x < playField[y].length; x++) {
                if (playField[y][x] === 1) {
                    playField[y + 1][x] = 1;
                    playField[y][x] = 0;
                }
            }
        }
    } else {
        fixTetro()
    }
}



function fixTetro() {
    for (let y = 0; y < playField.length; y++) {
        for (let x = 0; x < playField[y].length; x++) {
            if (playField[y][x] === 1) {
                playField[y][x] = 2;
            }
        }
    }
    playField[0] = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        playField[1] = [0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
}

drow()
document.onkeydown = function (e) {
    if (e.keyCode === 37) {
        moveTetraLeft()
    } else if (e.keyCode === 39) {

    } else if (e.keyCode === 40) {

    }
}
function startGame() {
    moveTetroDom()
    drow()
    setTimeout(startGame, gamSpeed)
}

setTimeout(startGame, gamSpeed)