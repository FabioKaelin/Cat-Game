
var mauss = document.getElementsByClassName("maus")
let mausNumber = 0
let mausXArray = []

function movemaus(mausX, Currentmaus, mauss) {
    mauss[Currentmaus].style.left = mausX
    mauss[Currentmaus].style.display = "block"
    if((mausX < 10 && mausX > 2) && (catY < 10)){
        mausBonus = true
    }
    if(gameOver){
        return
    }
    setTimeout(function() {
        mauss[Currentmaus].style.left = (mausX + "%")
        if (mausX > -5) {
            mausX -= 0.5;
            movemaus(mausX, Currentmaus, mauss);
        } else {
            mauss[Currentmaus].style.display = "none";
        }
    }, 2)
}
function spawnmaus(mausXArray, mausNumber, mauss){
    if(gameOver){
        return
    }

    setTimeout(function(){
        if (Math.floor(Math.random() * 10) < 8){
            mausXArray[mausNumber] = 95;
            movemaus(mausXArray[mausNumber], mausNumber, mauss)
            mausNumber++
            if(mausNumber == 3){
                mausNumber = 0
            }
        }
        spawnmaus(mausXArray, mausNumber, mauss)

    },RanomTime())
}

function RanomTime() {
    number = (Math.random() + 1)* 1000
    return number
}
function DelayStart() {

    setTimeout(function(){
        spawnmaus(mausXArray, mausNumber, mauss)
    },500)
}

DelayStart()

