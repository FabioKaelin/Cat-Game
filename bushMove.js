let bush = document.getElementById("bush")
bush.style.left = "600px"
console.log(bush)

j = 600;

function moveBush() {
    setTimeout(function() {
        bush.style.left = (j + "px")
        if (j > 0) {
            j--;
            j--;
            j--;
            j--;
            moveBush();
        }
    }, 2)
}