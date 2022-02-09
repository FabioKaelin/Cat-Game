let mond = document.getElementById("Mond")
let sun = document.getElementById("Sun")
let body = document.body
let div = document.getElementById("GameContent")
sun.style.display = "none"
mond.style.display = "none"
let night = false;


xcords0 = Math.floor(Math.random() * 2000);
xcords1 = Math.floor(Math.random() * 2000);
xcords2 = Math.floor(Math.random() * 2000);
console.log(` ${xcords0} ${xcords1} ${xcords2} `)

let t = 0;
function zyklus() {
    setTimeout(function() {
        if (t < 5000) {
            t++;
            xcords0++
            xcords1++
            xcords2++
            if (t < 2500) {
                night = true;
                stars[0].style.left = `${0.035 * xcords0}%`
                stars[1].style.left = `${0.035 * xcords1}%`
                stars[2].style.left = `${0.035 * xcords2}%`
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
console.info(stars)

function star() {
    if (night = true) {

        console.log("skibidabndodo")
        ycords1 = Math.floor(Math.random() * 50);
        stars[0].style.top = `${ycords1}%`

        ycords2 = Math.floor(Math.random() * 50);
        stars[1].style.top = `${ycords2}%`

        ycords3 = Math.floor(Math.random() * 50);
        stars[2].style.top = `${ycords3}%`
        console.log(` ${ycords1} ${ycords2} ${ycords3} `)

        stars[0].style.left = `${0.035 * t}%`
        stars[1].style.left = `${0.035 * t}%`
        stars[2].style.left = `${0.035 * t}%`
    } else {
    }
}

star()