let player1 = prompt("Enter the name of 1st player:");
let player2 = prompt("Enter the name of 2nd player:");


const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

const btn = document.getElementById("btn")
const alertWrapper = document.getElementsByClassName("alertWrapper")[0];
let winningMessage = document.getElementById("winningMessage");

btn.addEventListener("click", () => location.reload());

let k = 1;

box1.addEventListener("click", clickfunc);
box2.addEventListener("click", clickfunc);
box3.addEventListener("click", clickfunc);
box4.addEventListener("click", clickfunc);
box5.addEventListener("click", clickfunc);
box6.addEventListener("click", clickfunc);
box7.addEventListener("click", clickfunc);
box8.addEventListener("click", clickfunc);
box9.addEventListener("click", clickfunc);


function clickfunc(e) {
    if (!e.srcElement.classList.contains("size-cross") && k) {
        e.srcElement.classList.add("size-cross");
        e.srcElement.innerHTML = "&#10006;"
        k = 1 - k;
        e.srcElement.classList.remove("hover");
        e.srcElement.removeEventListener("click", clickfunc);
        if (checkWin()) {
            setTimeout(() => {
                if (player1 == "")
                    player1 = "Player 1";
                winningAlert(player1);
            }, 100)
        }
        if (checkDraw()) {
            setTimeout(() => {
                drawAlert();
            }, 100)
        }
    }
    else {
        e.srcElement.classList.add("size-circle");
        var createCircle = document.createElement("div")
        createCircle.classList.add("circle");
        e.srcElement.appendChild(createCircle);
        k = 1 - k;
        e.srcElement.classList.remove("hover");
        e.srcElement.removeEventListener("click", clickfunc);
        if (checkWin()) {
            setTimeout(() => {
                if (player2 == "")
                    player2 = "Player 2";
                winningAlert(player2);
            }, 100)
        }
        if (checkDraw()) {
            setTimeout(() => {
                drawAlert();
            }, 100)
        }
    }
}

function checkWin() {

    if (checkCondition("box1", "box2", "box3") || checkCondition("box4", "box5", "box6") || checkCondition("box7", "box8", "box9") || checkCondition("box1", "box4", "box7") || checkCondition("box2", "box5", "box8") || checkCondition("box3", "box6", "box9") || checkCondition("box1", "box5", "box9") || checkCondition("box3", "box5", "box7"))
        return true;

}

function checkDraw(){
    if(getData("box1")!="" && getData("box2")!="" && getData("box3")!="" && getData("box4")!="" && getData("box5")!="" && getData("box6")!="" && getData("box7")!="" && getData("box8")!="" && getData("box9")!="" && !(checkCondition("box1", "box2", "box3") || checkCondition("box4", "box5", "box6") || checkCondition("box7", "box8", "box9") || checkCondition("box1", "box4", "box7") || checkCondition("box2", "box5", "box8") || checkCondition("box3", "box6", "box9") || checkCondition("box1", "box5", "box9") || checkCondition("box3", "box5", "box7")))
        return true;
}

function checkCondition(box1, box2, box3) {
    if (getData(box1) != "" && getData(box2) != "" && getData(box3) != "" && getData(box1) == getData(box2) && getData(box1) == getData(box3))
        return true;
}

function getData(div) {
    return document.getElementById(div).innerHTML;
}

function winningAlert(player) {
    winningMessage.innerHTML = `Congratulation ${player}! You won`;
    alertWrapper.classList.remove("hideWrapper");
}

function drawAlert() {
    winningMessage.innerHTML = `Match Draw!`;
    alertWrapper.classList.remove("hideWrapper");
}