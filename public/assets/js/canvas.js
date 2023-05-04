var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "20px Arial";
ctx.fillText("Canvas", 115, 60);

ctx.fillStyle = "red";
ctx.fillRect(110, 150, 40, 40);

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 60, 60);

ctx.fillStyle = "red";
ctx.fillRect(240, 0, 60, 60);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 240, 30, 120);

ctx.fillStyle = "yellow";
ctx.fillRect(30, 270, 30, 30);

ctx.fillStyle = "black";
ctx.fillRect(270, 240, 30, 120);

ctx.fillStyle = "black";
ctx.fillRect(240, 270, 30, 30);

ctx.fillStyle = "aqua";
ctx.fillRect(0, 150, 30, 30);

ctx.fillStyle = "aqua";
ctx.fillRect(0, 120, 30, 30);

ctx.fillStyle = "aqua";
ctx.fillRect(270, 135, 30, 30);

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 300);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(300, 150);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(150, 150);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(150, 150);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 60, 0, Math.PI, true);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 80, 0, 1.75 * Math.PI, true);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.save();

ctx.scale(-1, 1);
ctx.translate(-300, 0);

ctx.beginPath();
ctx.arc(150, 150, 80, 0, 1.75 * Math.PI, true);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.restore();

ctx.beginPath();
ctx.arc(150, 115, 15, 0, Math.PI * 2, true);
ctx.fillStyle = "aqua";
ctx.fill();
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.arc(75, 225, 15, 0, Math.PI * 2, true);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(75, 225, 15, 0, Math.PI * 2, true);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.arc(225, 225, 15, 0, Math.PI * 2, true);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(225, 225, 15, 0, Math.PI * 2, true);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 300, 40, 0, Math.PI, true);
ctx.fillStyle = "aqua";
ctx.fill();
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 300, 60, 0, 1.5 * Math.PI, true);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.save();

ctx.scale(-1, 1);
ctx.translate(-300, 0);

ctx.beginPath();
ctx.arc(150, 300, 75, 0, 1.5 * Math.PI, true);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.restore();





