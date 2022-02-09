function CatJump() {
    setTimeout(function() {
        // console.log("up")
        cat.style.bottom = (catY + "px")
        // console.log(catY + "cat")
        catY++;
        catY++;
        catY++;
        catY++;
        catY++;
        if (catY < 150) {
            CatJump();
        } else {
            CatJumpdown()
            // break;
        }
    }, 5)
}

function CatJumpdown() {
    setTimeout(function() {
        // console.log("down")
        cat.style.bottom = (catY + "px")
        // console.log(catY + "cat")
        catY--;
        catY--;
        catY--;
        catY--;
        catY--;
        if (catY >= 0) {
            // console.log("down")
            CatJumpdown();
        } else {
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

    // window.alert("Jump")
}


const sneak = function(){
    // window.alert("Sneak")
    sneakTrue = true
}

const move = function(){
    console.log(event.keyCode)
    if (event.keyCode == 32){
        jump()
    } else if (event.keyCode == 40){
        sneakTrue = true
        sneak()
    } else if(event.keyCode == 38){
        jump()
    }
}

const unsneak = function(){
    if (event.keyCode == 40){
        sneakTrue = false
    }
}


let AllowcatJump = true
let cat = document.getElementById("cat")
let sneakTrue = false
cat.style.bottom = "0px"
let frame = 1
let position = 1

window.addEventListener("keydown", move)
window.addEventListener("keyup", unsneak)

const animation = function(){
    setTimeout(function() {
        if (sneakTrue) {
            if (position == 1){
                cat.src = "./character/Cat/cat-walk-sneak2.png"
                position = 2
                frame++
                if (frame == 5){
                    frame = 0
                    position = 2
                }
            } else {
                cat.src = "./character/Cat/cat-walk-sneak1.png"
                frame++
                if (frame == 5){
                    frame = 0
                    position = 1
                }
            }
        } else {
            if (position == 1){
                cat.src = "./character/Cat/cat-walk2.png"
                frame++
                if (frame == 25){
                    frame = 0
                    position = 2
                }
            } else {
                cat.src = "./character/Cat/cat-walk1.png"
                frame++
                if (frame == 25){
                    frame = 0
                    position = 1
                }
            }
        }
        animation()
    }, 5)
}
animation()