

// context = document.querySelector("canvas").getContext("2d");

// context.canvas.height = 180;
// context.canvas.width = 320;

// context.fillStyle = "#202020";
// context.fillRect(0, 0, 320, 180);


// context.strokeStyle = "#ff0000";
// context.lineWidth = 4;
// context.beginPath();
// context.moveTo(0, 164);
// context.lineTo(320, 164);
// context.stroke();

const jump = function(){
    window.alert("Space")
}

const sneak = function(){
    window.alert("arrow down")
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
        adler.style.left = (i + "px")
        console.log(i)
        console.log("adler")
        i++;
        if (i < 500) {
            myLoop();
        }
    }, 10)
}

function myLoop2() {
    console.log("cat")
    setTimeout(function() {
        cat.style.left = (j + "px")
        console.log(j)
        console.log("cat")
        j++;
        if (j < 500) {
            myLoop();
        }
    }, 10)
}


myLoop();
console.log("myloop end")
myLoop2();

