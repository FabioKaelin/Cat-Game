let x = 1;
let scores = document.getElementById("Score")

function score() {
    setTimeout(function(){
        x += 1;
        scores.innerText = x;
        score();
    }, 100)
}

score();