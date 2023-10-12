const p1 = {
    score:0,
    button:document.querySelector("#playerOneBtn"),
    display:document.querySelector("#playerOneScore"),
}

const p2 = {
    score:0,
    button:document.querySelector("#playerTwoBtn"),
    display:document.querySelector("#playerTwoScore"),
}

const resetBtn = document.querySelector("#resetBtn");
const roundSelector = document.querySelector("#roundsSelector");

let winingScore = 3;
let isgameON = true;


function updateScores(player,opponent){
    if(isgameON){
        player.score++;
        if( player.score === winingScore){
            isgameON = false;
            player.display.classList.add('text-success')
            opponent.display.classList.add('text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

function reset(){
    isgameON = true;
    winingScore = 3;
    for(let player of [p1,p2]){
        player.score = 0;
        player.button.disabled = false;
        player.display.innerText = 0;
        player.display.classList.remove('text-success', 'text-danger')
    }
}

p1.button.addEventListener('click',() =>{
    updateScores(p1,p2)
})

p2.button.addEventListener('click',() => {
    updateScores(p2,p1)
})

roundSelector.addEventListener('change',() => {
    reset();
    winingScore = parseInt(roundSelector.value);//need to convert into number from a string type
})

resetBtn.addEventListener('click',() => {
    roundSelector.value = 3;
    reset();
})

