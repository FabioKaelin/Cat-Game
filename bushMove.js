let bush = document.getElementById("bush")
bush.style.left = "600px"
console.log(bush)

k = 600;

function moveBush() {
    setTimeout(function() {
        bush.style.left = (k + "px")
        if (k > 0) {
            k--;
            k--;
            k--;
            k--;
            moveBush();
        }
    }, 2)
}

moveBush();
