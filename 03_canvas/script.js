const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

// Draw rectangle
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

// Draw circle
ctx.fillStyle = "coral";
ctx.arc(300, 300, 100, 0, Math.PI * 2); // 2*PI*R
ctx.fill();

// Draw lines
ctx.beginPath();
ctx.strokeStyle = "orange"; // lines don't use fill style
ctx.lineWidth = 5; // for thicker line
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
ctx.fillText("Hello World", 300, 100, 300);
ctx.lineWidth = 2; // don't forget to change last width for stroke
ctx.strokeText("Hello World", 300, 500, 300);

// Draw image
const image = document.querySelector("img");
image.style.display = "none";

// ctx.drawImage(image, 270, 270, 100, 100);

image.addEventListener("load", () => {
  ctx.drawImage(image, 270, 270, 100, 100);
}); // images should be loaded before putting in canvas
