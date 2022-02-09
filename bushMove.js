
var bushs = document.getElementsByClassName("bush")
// console.log(bushs)
let bushNumber = 0
let bushXArray = []

function moveBush(bushX, CurrentBush, bushs) {
    // console.log(bushX)
    // console.log(bushs)
    // console.log(CurrentBush)
    bushs[CurrentBush].style.left = bushX
    bushs[CurrentBush].style.display = "block"
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

    setTimeout(function(){
        if (Math.floor(Math.random() * 10) < 8){
            // console.log("new bush")
            bushXArray[bushNumber] = 95;
            // console.log(bushXArray[bushNumber])
            // console.log(bushs)
            moveBush(bushXArray[bushNumber], bushNumber, bushs)
            bushNumber++
            if(bushNumber == 3){
                bushNumber = 0
            }
        }
        spawnBush(bushXArray, bushNumber, bushs)

    },1000)


}

function DelayStart() {

    setTimeout(function(){
        // bush[0].style.left = "600px"
        // console.log(bushs[0])
        spawnBush(bushXArray, bushNumber, bushs)
    },5)
}

DelayStart()