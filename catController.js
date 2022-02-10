var catY = 0;
var gameOver = false
var sneakTrue = false

function CatJump(flowCounter) {
    setTimeout(function() {
        cat.style.bottom = (catY + "%")
        catY++;
        catY++;
        if (catY < 60) {
            CatJump(flowCounter);
        } else {
            CatJumpflow()
            // break;
        }
    }, 5)
}

function CatJumpflow(flowCounter){
    setTimeout(function(){
        flowCounter++
        if (flowCounter < 10){
            CatJumpflow(flowCounter)
        } else {
            CatJumpdown()
        }
    },90)
}

function CatJumpdown() {
    setTimeout(function() {
        cat.style.bottom = (catY + "%")
        catY--;
        catY--;
        if (catY >= 0) {
            CatJumpdown();
        } else {
            cat.style.bottom = "0%"
            AllowcatJump = true
        }
    },5)
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
        sneakTrue = true
        sneak()
        AllowcatJump = false
    } else if(event.keyCode == 38){
        jump()
    }
}

const unsneak = function(){
    if (event.keyCode == 40){
        sneakTrue = false
        AllowcatJump = true
    }
}


let AllowcatJump = true
let cat = document.getElementById("cat")
// let sneakTrue = false
cat.style.bottom = "0px"
let frame = 1
let position = 1

window.addEventListener("keydown", move)
window.addEventListener("keyup", unsneak)

const Catanimation = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        if (sneakTrue) {
            if (position == 1){
                cat.src = "./character/Cat/cat-walk-sneak2.png"
                frame++
                if (frame > 12){
                    frame = 0
                    position = 2
                }
            } else {
                cat.src = "./character/Cat/cat-walk-sneak1.png"
                frame++
                if (frame > 12){
                    frame = 0
                    position = 1
                }
            }
        } else {
            if (position == 1){
                cat.src = "./character/Cat/cat-walk2.png"
                frame++
                if (frame > 12){
                    frame = 0
                    position = 2
                }
            } else {
                cat.src = "./character/Cat/cat-walk1.png"
                frame++
                if (frame > 12){
                    frame = 0
                    position = 1
                }
            }
        }
        Catanimation()
    }, 2)
}
Catanimation()