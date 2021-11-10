/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

/*
let x = 300;
let y = 200;

ctx.fillRect(x, y, 200, 200);
*/

let x2 = 400;
let y2 = 100;

let color = 0;

canvas.addEventListener("mousemove", (e) => {
	ctx.fillStyle = `hsla(${color}, 90%, 60%, 1`;
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 60, 0, Math.PI * 2, false);
	ctx.fill();
	color = color + 0.1;
});
