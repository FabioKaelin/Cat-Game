
let speed = 1
let adler = document.getElementById("adler")

var i = 0;
// var j = 0;

function myLoop() {
    setTimeout(function() {
        adler.style.bottom = (i + "px")
        // console.log(i + "adler")
        i++;
        if (i < 100) {
            myLoop();
        }
    }, 10)
}




myLoop();
console.log("myloop end")
// CatJump();



//Hallo Jon
//Hallo FAbio