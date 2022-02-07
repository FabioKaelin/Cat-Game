

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

context.fillStyle = "#202020";
context.fillRect(0, 0, 320, 180);
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