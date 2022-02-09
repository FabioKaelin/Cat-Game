let mond = document.getElementById("Mond")
let sun = document.getElementById("Sun")
let body = document.body
let div = document.getElementById("GameContent")
sun.style.display = "none"
mond.style.display = "none"

let t = 0;
console.log(mond)
console.log(sun)
function zyklus() {
    setTimeout(function() {
        if (t < 5000) {
            t++;
            if (t < 2500) {
                mond.style.display = "block"
                mond.style.left = `${0.035 * t}%`
                sun.style.display = "none"
                body.style.backgroundColor = "dimgrey"
                div.style.backgroundColor = "rgb(43, 43, 43)"
            } else {
                mond.style.display = "none"
                sun.style.display = "block"
                sun.style.left = `${0.03 * (t - 2500)}%`
                body.style.backgroundColor = "rgb(55, 101, 255)"
                div.style.backgroundColor = "rgb(0, 225, 255)"
            }
        } else {
            t = 0;
        }
        zyklus()
    }, 10)
}

zyklus()

let star = document.getElementsByClassName("star")

function star() {

}