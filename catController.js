const jump = function(){
    window.alert("Jump")
}

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
let cat = document.getElementById("cat")

var i = 0;
var j = 0;

function myLoop() {
    setTimeout(function() {
        adler.style.right = (i + "px")
        console.log(i + "adler")
        i++;
        if (i < 100) {
            myLoop();
        }
    }, 10)
}

function myLoop2() {
    setTimeout(function() {
        cat.style.left = (j + "px")
        console.log(j + "cat")
        j++;
        if (j < 100) {
            myLoop2();
        }
    }, 10)
}


myLoop();
console.log("myloop end")
myLoop2();

