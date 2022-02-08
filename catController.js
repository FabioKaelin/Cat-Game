function CatJump() {
    setTimeout(function() {
        // console.log("up")
        cat.style.bottom = (j + "px")
        // console.log(j + "cat")
        j++;
        j++;
        j++;
        j++;
        j++;
        if (j < 150) {
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
        cat.style.bottom = (j + "px")
        // console.log(j + "cat")
        j--;
        j--;
        j--;
        j--;
        j--;
        if (j >= 0) {
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
        j = 0
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

window.addEventListener("keydown", move)
window.addEventListener("keyup", unsneak)

const animation = function(){
    setTimeout(function() {
        if (sneakTrue) {
            if (frame == 1){
                cat.src = "./character/Cat/cat-walk-sneak2.png"
                frame = 2
            } else {
                cat.src = "./character/Cat/cat-walk-sneak1.png"
                frame = 1
            }
        } else {
            if (frame == 1){
                cat.src = "./character/Cat/cat-walk2.png"
                frame = 2
            } else {
                cat.src = "./character/Cat/cat-walk1.png"
                frame = 1
            }
        }
        animation()
    }, 100)
}
animation()