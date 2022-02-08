let bush = document.getElementById("bush")
bush.style.left = "600px"
console.log(bush)

k = 600;

function moveBush() {
    bush.style.display = "block"
    setTimeout(function() {
        bush.style.left = (k + "px")
        if (k > -50) {
            k--;
            k--;
            k--;
            k--;
            moveBush();
        } else {
            bush.style.display = "none";
        }
    }, 2)
}

moveBush();