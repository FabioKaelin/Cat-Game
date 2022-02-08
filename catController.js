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
        if (j < 100) {
            CatJump();
        } else {
            CatJumpdown()
            // break;
        }
    }, 2)
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
    }, 2)
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
    window.alert("Sneak")
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


let AllowcatJump = true
let cat = document.getElementById("cat")
let sneakTrue = false
cat.style.bottom = "0px"

window.addEventListener("keydown", move)
window.addEventListener("keyup", move)
