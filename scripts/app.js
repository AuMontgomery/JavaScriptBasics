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

let lightness = 50;
let isDrawing = false;

window.addEventListener("keydown", (e) => {
	console.log(e.key);

	switch (e.key) {
		case "e":
			lightness = 100;
			break;

		case "g":
			color = 120;
		default:
			lightness = 50;
	}
});

canvas.addEventListener("mousedown", () => {
	isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
	isDrawing = false;
});

canvas.addEventListener("mousemove", (e) => {
	if (!isDrawing) return;

	ctx.fillStyle = `hsla(${color}, 90%, ${lightness}%, 1`;
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2, false);
	ctx.fill();
	//color = color + 0.5;
});
