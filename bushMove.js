let bush = document.getElementById("bush")
bush.style.left = "600px"
console.log(bush)

j = 600;

function moveBush() {
    setTimeout(function() {
        bush.style.left = (j + "px")

        j--;
        j--;
        j--;
        j--;
        if (j > 0) {
            moveBush();
        }
    }, 2)
}

moveBush()