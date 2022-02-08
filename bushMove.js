let bush = document.getElementById("bush")
bush.style.left = "600px"
console.log(bush)

k = 600;

function moveBush() {
    bush.style.display = "block"
    setTimeout(function() {
<<<<<<< HEAD
        bush.style.left = (j + "px")

        j--;
        j--;
        j--;
        j--;
        if (j > 0) {
=======
        bush.style.left = (k + "px")
        if (k > -50) {
            k--;
            k--;
            k--;
            k--;
>>>>>>> 9a44a33561d2ecc20cd95e8dcfef7ffce479b7f7
            moveBush();
        } else {
            bush.style.display = "none";
        }
    }, 2)
}

<<<<<<< HEAD
moveBush()
=======
moveBush();
>>>>>>> 9a44a33561d2ecc20cd95e8dcfef7ffce479b7f7
