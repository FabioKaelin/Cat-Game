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
let AllowcatJump = true
let cat = document.getElementById("cat")
cat.style.bottom = "0px"
const sneak = function(){
    window.alert("Sneak")
}

const move = function(){
    if (event.keyCode == 32){
        jump()
    } else if (event.keyCode == 40){
        sneak()
    }
}
window.addEventListener("keydown", move)
window.addEventListener("keyup", move)

let speed = 1
let adler = document.getElementById("adler")

var i = 0;
// var j = 0;

function myLoop() {
    setTimeout(function() {
        adler.style.bottom = (i + "px")
        console.log(i + "adler")
        i++;
        if (i < 100) {
            myLoop();
        }
    }, 10)
}




myLoop();
console.log("myloop end")
// CatJump();

