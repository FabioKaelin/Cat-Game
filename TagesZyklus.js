let mond = document.getElementById("Mond")
let sun = document.getElementById("Sun")
let body = document.body
let div = document.getElementById("GameContent")
sun.style.display = "none"
mond.style.display = "none"
let night = false;

function xcords() {
    xcords0 = Math.floor(Math.random() * 2000);
    xcords1 = Math.floor(Math.random() * 2000);
    xcords2 = Math.floor(Math.random() * 2000);
    xcords3 = Math.floor(Math.random() * 2000);
    xcords4 = Math.floor(Math.random() * 2000);
    xcords5 = Math.floor(Math.random() * 2000);
    xcords6 = Math.floor(Math.random() * 2000);
    setTimeout(function() {
        xcords0 = Math.floor(Math.random() * 2000);
        xcords1 = Math.floor(Math.random() * 2000);
        xcords2 = Math.floor(Math.random() * 2000);
        xcords3 = Math.floor(Math.random() * 2000);
        xcords4 = Math.floor(Math.random() * 2000);
        xcords5 = Math.floor(Math.random() * 2000);
        xcords6 = Math.floor(Math.random() * 2000);
        xcords()
    }, 50000)
}


let t = 0;
function zyklus() {
    if (gameOver) {
        return
    }
    setTimeout(function() {
        if (t < 5000) {
            t++;
            xcords0++
            xcords1++
            xcords2++
            xcords3++
            xcords4++
            xcords5++
            xcords6++
            if (t < 2500) {
                night = true;
                stars[0].style.left = `${0.035 * xcords0}%`
                stars[1].style.left = `${0.035 * xcords1}%`
                stars[2].style.left = `${0.035 * xcords2}%`
                stars[3].style.left = `${0.035 * xcords3}%`
                stars[4].style.left = `${0.035 * xcords4}%`
                stars[5].style.left = `${0.035 * xcords5}%`
                stars[6].style.left = `${0.035 * xcords6}%`

                if(xcords0 > 2500){
                    xcords0 = 0
                }
                if(xcords1 > 2500){
                    xcords1 = 0
                }
                if(xcords2 > 2500){
                    xcords2 = 0
                }
                if(xcords3 > 2500){
                    xcords3 = 0
                }
                if(xcords4 > 2500){
                    xcords4 = 0
                }
                if(xcords5 > 2500){
                    xcords5 = 0
                }
                if(xcords6 > 2500){
                    xcords6 = 0
                }

                stars[0].style.display = "block"
                stars[1].style.display = "block"
                stars[2].style.display = "block"
                stars[3].style.display = "block"
                stars[4].style.display = "block"
                stars[5].style.display = "block"
                stars[6].style.display = "block"
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
                stars[3].style.display = "none"
                stars[4].style.display = "none"
                stars[5].style.display = "none"
                stars[6].style.display = "none"
            }
        } else {
            t = 0;
        }
        zyklus()
    }, 10)
}

zyklus()

let stars = document.getElementsByClassName("star")

ycords1 = Math.floor(Math.random() * 50);
stars[0].style.top = `${ycords1}%`

ycords2 = Math.floor(Math.random() * 50);
stars[1].style.top = `${ycords2}%`

ycords3 = Math.floor(Math.random() * 50);
stars[2].style.top = `${ycords3}%`

ycords4 = Math.floor(Math.random() * 50);
stars[3].style.top = `${ycords4}%`

ycords5 = Math.floor(Math.random() * 50);
stars[4].style.top = `${ycords5}%`

ycords6 = Math.floor(Math.random() * 50);
stars[5].style.top = `${ycords6}%`

ycords7 = Math.floor(Math.random() * 50);
stars[6].style.top = `${ycords7}%`

function star() {
    setInterval(function() {
    if (night = true) {

        ycords1 = Math.floor(Math.random() * 50);
        stars[0].style.top = `${ycords1}%`

        ycords2 = Math.floor(Math.random() * 50);
        stars[1].style.top = `${ycords2}%`

        ycords3 = Math.floor(Math.random() * 50);
        stars[2].style.top = `${ycords3}%`

        ycords4 = Math.floor(Math.random() * 50);
        stars[3].style.top = `${ycords4}%`

        ycords5 = Math.floor(Math.random() * 50);
        stars[4].style.top = `${ycords5}%`

        ycords6 = Math.floor(Math.random() * 50);
        stars[5].style.top = `${ycords6}%`

        ycords7 = Math.floor(Math.random() * 50);
        stars[6].style.top = `${ycords7}%`

    } else {
    }
    star()
}, 50000)
}

star()