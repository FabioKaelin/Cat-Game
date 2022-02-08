let bush = document.getElementsByClassName("bush")
bush[0].style.left = "600px"
console.log(bush[0])



function moveBush0(k) {
    bush[0].style.display = "block"
    setTimeout(function() {
        bush[0].style.left = (k + "px")
        if (k > -50) {
            k--;
            k--;
            k--;
            k--;
            moveBush0(k);
        } else {
            bush[0].style.display = "none";
        }
    }, 2)
}

// moveBush0()

function spawnBush(){
    setTimeout(function(){
        if (Math.floor(Math.random() * 10) < 8){
            console.log("new bush")
            let  k = 600;
            moveBush0(k)
        }
        spawnBush()

    },1000)
}

spawnBush()