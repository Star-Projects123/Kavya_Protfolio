const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  for (let x = 0; x < canvas.width; x++) {
    let y = canvas.height / 2 + 
            Math.sin(x * 0.01 + Date.now() * 0.002) * 50;

    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "#22d3ee";
  ctx.lineWidth = 2;
  ctx.stroke();

  requestAnimationFrame(draw);
}

draw();