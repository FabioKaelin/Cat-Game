var catY = 0;
var gameOver = false
var sneakTrue = false
var spatzBonus = false
var mausBonus = false
var gamespeed = 1


function CatJump(flowCounter) {
    setTimeout(function() {
        cat.style.bottom = (catY + "%")
        catY += 2
        if (sneakTrue) {
            CatJumpdown()
        } else if(catY < 60){
            CatJump(flowCounter);
        }else {
            CatJumpflow()
        }
    }, 5/gamespeed)
}

function CatJumpflow(flowCounter){
    setTimeout(function(){
        flowCounter++
        if (flowCounter < 10){
            CatJumpflow(flowCounter)
        } else {
            CatJumpdown()
        }
    },90/gamespeed)
}

function CatJumpdown() {
    setTimeout(function() {
        cat.style.bottom = (catY + "%")
        catY--;
        catY--;
        if(sneakTrue){
            catY--
        }
        if (catY >= 4) {
            CatJumpdown();
        } else {
            cat.style.bottom = "2%"
            AllowcatJump = true
        }
    },5/gamespeed)
}

const jump = function(){
    if (AllowcatJump){
        AllowcatJump = false
        catY = 0
        CatJump()
    }

}


const sneak = function(){
    sneakTrue = true
}

const move = function(){
    if (event.keyCode == 32){
        jump()
    } else if (event.keyCode == 40){
        sneak()
        AllowcatJump = false
    } else if(event.keyCode == 38){
        jump()
    }
}

const unsneakif = function(){
    if (event.keyCode == 40){
        sneakTrue = false
        AllowcatJump = true
    }
}


let AllowcatJump = true
let cat = document.getElementById("cat")
// let sneakTrue = false
cat.style.bottom = "2%"

window.addEventListener("keydown", move)
window.addEventListener("keyup", unsneakif)


let frame = 0
let position1 = true

const Catanimation = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        frame++
        if (sneakTrue) {
            if (position1){
                cat.src = "./character/Cat/cat-walk-sneak2.png"
            } else {
                cat.src = "./character/Cat/cat-walk-sneak1.png"
            }
        } else {
            if (position1){
                cat.src = "./character/Cat/cat-walk2.png"
            } else {
                cat.src = "./character/Cat/cat-walk1.png"
            }
        }
        if(frame > 12){
            frame = 0
            position1 = !position1
        }
        Catanimation()
    }, 10/gamespeed)
}
Catanimation()