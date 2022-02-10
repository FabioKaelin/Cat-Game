let x = 1;
let scores = document.getElementById("Score")

function score() {
    if (gameOver){
        return
    }
    setTimeout(function(){
        x++ ;
        if(spatzBonus){
            x += 30
            spatzBonus = false
        }
        scores.innerText = "Score: " + x;

        score();
    }, 100)
}

score();