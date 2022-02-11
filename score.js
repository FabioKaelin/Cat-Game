let x = 0;
let scores = document.getElementById("Score")

function score() {
    if (gameOver){
        document.body.style.backgroundColor = "#ff6666"
        return
    }
    setTimeout(function(){
        x++ ;
        if(spatzBonus || mausBonus){
            x += 30
            spatzBonus = false
            mausBonus = false
        }
        gamespeed += 0.0005
        scores.innerText = "Score: " + x;

        score();
    }, 100)
}

score();


