let bush = document.getElementsByClassName("bush")
bush[0].style.left = "600px"
console.log(bush[0])

k = 600;

function moveBush0() {
    bush[0].style.display = "block"
    setTimeout(function() {
        bush[0].style.left = (k + "px")
        if (k > -50) {
            k--;
            k--;
            k--;
            k--;
            moveBush0();
        } else {
            bush[0].style.display = "none";
        }
    }, 2)
}

moveBush0()
