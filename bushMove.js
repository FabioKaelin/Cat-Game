let bush = document.getElementsByClassName("bush")
bush[0].style.left = "600px"
console.log(bush[0])



function moveBush0(bushX, CurrentBush) {
    bush[CurrentBush].style.left = bushX
    bush[CurrentBush].style.display = "block"
    setTimeout(function() {
        bush[CurrentBush].style.left = (bushX + "%")
        if (bushX > -5) {
            bushX -= 0.5;
            moveBush0(bushX, CurrentBush);
        } else {
            bush[CurrentBush].style.display = "none";
        }
    }, 2)
}

let bushNumber = 0
let bushXArray = []
function spawnBush(){
    setTimeout(function(){
        if (Math.floor(Math.random() * 10) < 8){
            console.log("new bush")
            bushXArray[bushNumber] = 95;
            console.log(bushXArray)
            moveBush0(bushXArray[bushNumber], bushNumber)
            bushNumber++
            if(bushNumber == 3){
                bushNumber = 0
            }
        }
        spawnBush()

    },1000)
}

spawnBush()