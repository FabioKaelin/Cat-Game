
var adlers = document.getElementsByClassName("adler")
let adlerNumber = 0
let adlerXArray = []

function moveadler(adlerX, Currentadler, adlers, adlerY) {
    adlers[Currentadler].style.left = adlerX
    adlers[Currentadler].style.display = "block"
    if((adlerX < 10 && adlerX > 2) && (catY < adlerY-((sneakTrue + 1)*20) || catY > adlerY)){
        gameOver = true
    }
    if(gameOver){
        return
    }
    setTimeout(function() {
        adlers[Currentadler].style.left = (adlerX + "%")
        if (adlerX > -5) {
            adlerX -= 0.5;
            moveadler(adlerX, Currentadler, adlers, adlerY);
        } else {
            adlers[Currentadler].style.display = "none";
        }
    }, 10)
}
function spawnadler(adlerXArray, adlerNumber, adlers){
    if(gameOver){
        return
    }

    setTimeout(function(){
        if (Math.floor(Math.random() * 10) < 9){
            adlerXArray[adlerNumber] = 95;
            let adlerY = Math.floor(Math.random() * 75)
            adlers[adlerNumber].style.top = `${adlerY}%`
            console.log(adlerY)
            moveadler(adlerXArray[adlerNumber], adlerNumber, adlers, adlerY)
            adlerNumber++
            if(adlerNumber == 3){
                adlerNumber = 0
            }
        }
        spawnadler(adlerXArray, adlerNumber, adlers)

    },RanomTime())
}

function RanomTime() {
    number = (Math.random() + 1)* 2000
    return number
}
function DelayStart() {

    setTimeout(function(){
        spawnadler(adlerXArray, adlerNumber, adlers)
    },1000)
}

DelayStart()

