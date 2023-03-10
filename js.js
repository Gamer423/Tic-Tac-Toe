function playAgain() {
    document.querySelector(".winpop").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    window.location.reload();
};

let boxes = document.querySelectorAll(".box");

let playerturn = 'X';

let playerOneWin = false;
let playerTwoWin = false;

let A = document.getElementsByClassName('box')[0];
let B = document.getElementsByClassName('box')[1];
let C = document.getElementsByClassName('box')[2];
let D = document.getElementsByClassName('box')[3];
let E = document.getElementsByClassName('box')[4];
let F = document.getElementsByClassName('box')[5];
let G = document.getElementsByClassName('box')[6];
let H = document.getElementsByClassName('box')[7];
let I = document.getElementsByClassName('box')[8];

const checkwinner = (() => {
    let one = A.innerText;
    let two = B.innerText;
    let three = C.innerText;
    let four = D.innerText;
    let five = E.innerText;
    let six = F.innerText;
    let seven = G.innerText;
    let eight = H.innerText;
    let nine = I.innerText;

    //CHECK FOR PLAYER X WIN
    
    //COLUMNS 1,2,3
    if (one === 'X' && two === 'X' && three === 'X') {
        playerOneWin = true;
    } else if (four === 'X' && five === 'X' && six === 'X') {
        playerOneWin = true
    } else if (seven === 'X' && eight === 'X' && nine === 'X') {
        playerOneWin = true;
    }

    //ROWS 1,2,3
    else if (one === 'X' && four === 'X' && seven === 'X') {
        playerOneWin = true;
    } else if (two === 'X' && five === 'X' && eight === 'X') {
        playerOneWin = true;
    } else if (three === 'X' && six === 'X' && nine === 'X') {
        playerOneWin = true;
    }


    //LINE WIN
    else if (three === 'X' && five === 'X' && seven === 'X') {
        playerOneWin = true;
    } else if (nine === 'X' && five === 'X' && one === 'X') {
        playerOneWin = true;
    }

    //CHECK FOR PLAYER 0 WIN
    //COLUMNS 1,2,3
    if (one === '0' && two === '0' && three === '0') {
        playerTwoWin = true;
    } else if (four === '0' && five === '0' && six === '0') {
        playerTwoWin = true
    } else if (seven === '0' && eight === '0' && nine === '0') {
        playerTwoWin = true;
    }
    
    //ROWS 1,2,3
    else if (one === '0' && four === '0' && seven === '0') {
        playerTwoWin = true;
    } else if (two === '0' && five === '0' && eight === '0') {
        playerTwoWin = true;
    } else if (three === '0' && six === '0' && nine === '0') {
        playerTwoWin = true;
    }
    
    
    //LINE WIN
    else if (three === '0' && five === '0' && seven === '0') {
        playerTwoWin = true;
    } else if (nine === '0' && five === '0' && one === '0') {
        playerTwoWin = true;
    }

    if (playerOneWin === true) {
        document.querySelector(".winpop").style.display = "flex";
        document.getElementById("one").style.display = "block";
        resetboard();
        playerOneWin = false;
    } else if (playerTwoWin === true) {
        document.querySelector(".winpop").style.display = "flex";
        document.getElementById("two").style.display = "block";
        resetboard();
        playerTwoWin = false;
    }
});


let playerTurnOne = () => {
    boxes.forEach(box => {
        box.addEventListener('click', (e) => {
            box.innerText = "X";
            playerturn = "0";
            playerTurnTwo();
            checkwinner();
        })
    })
}


let playerTurnTwo = () => {
    boxes.forEach(box => {
        box.addEventListener('click', (e) => {
            box.innerText = "0";
            playerturn = "X";
            playerTurnOne();
            checkwinner();
        } )
    })
}


playerTurnOne();

// RESET THE BOARD AFTER WIN
function resetboard() {
function delay() {
    boxes.forEach(box => {
        box.innerText = '';
    })
} setTimeout(delay,100);
}

let playeronewin = document.getElementById("one");
let playertwowin = document.getElementById("two");



