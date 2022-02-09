let mond = document.getElementById("Mond")
let sun = document.getElementById("Sun")
let body = document.body
let div = document.getElementById("GameContent")
sun.style.display = "none"
mond.style.display = "none"
let night = false;

let t = 0;
console.log(mond)
console.log(sun)
function zyklus() {
    setTimeout(function() {
        if (t < 5000) {
            t++;
            if (t < 2500) {
                night = true;
                stars[0].style.display = "block"
                stars[1].style.display = "block"
                stars[2].style.display = "block"
                mond.style.display = "block"
                mond.style.left = `${0.035 * t}%`
                sun.style.display = "none"
                body.style.backgroundColor = "dimgrey"
                div.style.backgroundColor = "rgb(43, 43, 43)"
            } else {
                night = false;
                mond.style.display = "none"
                sun.style.display = "block"
                sun.style.left = `${0.03 * (t - 2500)}%`
                body.style.backgroundColor = "rgb(55, 101, 255)"
                div.style.backgroundColor = "rgb(0, 225, 255)"
                stars[0].style.display = "none"
                stars[1].style.display = "none"
                stars[2].style.display = "none"
            }
        } else {
            t = 0;
        }
        zyklus()
    }, 10)
}

zyklus()

let stars = document.getElementsByClassName("star")

function star() {
    if (night = true) {


    } else {
    }
}

star()