
var bushs = document.getElementsByClassName("bush")
let bushNumber = 0
let bushXArray = []

function moveBush(bushX, CurrentBush, bushs) {
    bushs[CurrentBush].style.left = bushX
    bushs[CurrentBush].style.display = "block"
    if((bushX < 10 && bushX > 2) && (catY < 10)){
        gameOver = true
    }
    if(gameOver){
        return
    }
    setTimeout(function() {
        bushs[CurrentBush].style.left = (bushX + "%")
        if (bushX > -5) {
            bushX -= 0.5;
            moveBush(bushX, CurrentBush, bushs);
        } else {
            bushs[CurrentBush].style.display = "none";
        }
    }, 2)
}
function spawnBush(bushXArray, bushNumber, bushs){
    if(gameOver){
        return
    }

    setTimeout(function(){
        if (Math.floor(Math.random() * 10) < 8){
            bushXArray[bushNumber] = 95;
            moveBush(bushXArray[bushNumber], bushNumber, bushs)
            bushNumber++
            if(bushNumber == 3){
                bushNumber = 0
            }
        }
        spawnBush(bushXArray, bushNumber, bushs)

    },RanomTime())
}

function RanomTime() {
    number = (Math.random() + 1)* 1000
    return number
}
function DelayStart() {

    setTimeout(function(){
        spawnBush(bushXArray, bushNumber, bushs)
    },500)
}

DelayStart()

