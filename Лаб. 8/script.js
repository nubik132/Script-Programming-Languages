let width = window.innerWidth;
let height = window.innerHeight;

h_player_size = 100 / 2;

let isP1Up = isP1Down = isP2Up = isP2Down = false;

let framerate = 1000 / 60;

let border_x = width / 2 - 10;
let border_y = height / 2 - 10;

let isAiOn = confirm("1 игрок?");


document.addEventListener("keydown", (e) => {
    if (e.code == "KeyW") {
        isP1Up = true;
    }
    if (e.code == "KeyS") {
        isP1Down = true;
    }
    if (e.key == "ArrowUp") {
        isP2Up = true;
    }
    if (e.key == "ArrowDown") {
        isP2Down = true;
    }
})

document.addEventListener("keyup", (e) => {
    if (e.code == "KeyW") {
        isP1Up = false;
    }
    if (e.code == "KeyS") {
        isP1Down = false;
    }
    if (e.key == "ArrowUp") {
        isP2Up = false;
    }
    if (e.key == "ArrowDown") {
        isP2Down = false;
    }
})

function game() {
    player_1.style.top = "0px";
    player_2.style.top = "0px";
    ball.style.top = "0px";
    ball.style.left = "0px";

    let ball_trans_x = 8
    let ball_trans_y = 8

    function ballMove() {
        function tryChangeDirection(player) {
            if (getSide(ball, 'top') < getSide(player, 'top') + h_player_size &&
                getSide(ball, 'top') > getSide(player, 'top') - h_player_size) {
                ball_trans_x *= -1.2;
                ball_trans_y *= 1.2;
            }
        }

        if (getSide(ball, 'left') < -border_x + 15) {
            tryChangeDirection(player_1)
        }

        if (getSide(ball, 'left') > border_x - 15) {
            tryChangeDirection(player_2)
        }


        if (getSide(ball, 'top') > border_y || getSide(ball, 'top') < -border_y) {
            ball_trans_y *= -1;
        }



        if (getSide(ball, 'left') > border_x || getSide(ball, 'left') < -border_x) {
            if (getSide(ball, 'left') > 0) {                
                score_1.innerText = parseInt(score_1.innerText) + 1
            }
            else{
                score_2.innerText = parseInt(score_2.innerText) + 1
            }
            setSide(ball, 'top', '0px');
            setSide(ball, 'left', '0px');

            // ball_trans_x *= -1;
            ball_trans_x = 8;
            ball_trans_y = 8;
        }
        if(score_1.innerText === "3"){
            winner_1.style.display = "block";
            ball_trans_x = 0;
            ball_trans_y = 0;
        }
        if (score_2.innerText === "3"){
            winner_2.style.display = "block";
            ball_trans_x = 0;
            ball_trans_y = 0;
        }
        


        Move(ball, ball_trans_y, 'top');
        Move(ball, ball_trans_x, 'left');
    }


    setInterval(() => { playersMove(); ballMove(); }, framerate);
}

function Move(elem, value, side) {
    elem.style[side] = getSide(elem, side) - value + "px";
}

function getSide(elem, side) {
    return parseInt(elem.style[side]);
}

function setSide(elem, side, value) {
    elem.style[side] = value;
}


const player_speed = 5;

function playersMove() {
    if (isP1Up) {
        Move(player_1, player_speed, 'top');
    }
    if (isP1Down) {
        Move(player_1, -player_speed, 'top');
    }
    if (isP2Up) {
        Move(player_2, player_speed, 'top');
    }
    if (isP2Down) {
        Move(player_2, -player_speed, 'top');
    }
}

const bot_speed = 8;

function ai() {
    // document.dispatchEvent("keydown")
    
    if (getSide(ball, "top") < getSide(player_2, "top")) {
        Move(player_2, bot_speed, "top");
    }
    if (getSide(ball, "top") > getSide(player_2, "top")) {
        Move(player_2, -bot_speed, "top");
    }
}

game()
if (isAiOn) {
    setInterval(() => ai(), framerate);
}