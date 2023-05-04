// Faça o controle de um quadrado por meio da posição do ponteiro do mouse. Faça o controle de um quadrado por meio da posição do ponteiro do mouse. O quadrado vermelho deve seguir o ponteiro do mouse.. O quadrado vermelho não pode, jamais, desaparecer do canvas.

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let x = 130;
let y = 130;

canvas.addEventListener("mousemove", function (event) {
    let rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left - 25;
    y = event.clientY - rect.top - 25;
    if (x < 0) {
        x = 0;
    } else if (x > 250) {
        x = 250
    }
    if (y < 0) {
        y = 0;
    } else if (y > 250) {
        y = 250
    }
});

function draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 50, 50);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function loop() {
    clear();
    draw();
    requestAnimationFrame(loop);
}

loop();