let mond = document.getElementById("Mond")
let sun = document.getElementById("Sun")
sun.style.display = "none"
mond.style.display = "none"

let t = 0;
console.log(mond)
console.log(sun)
function zyklus() {
    setTimeout(function() {
        if (t < 50) {
            t++;
            if (t < 25) {
                mond.style.display = "block"
                sun.style.display = "none"
            } else {
                mond.style.display = "none"
                sun.style.display = "block"
            }
        } else {
            t = 0;
        }
        zyklus()
    }, 1000)
}

zyklus()