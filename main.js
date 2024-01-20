var mouseEvent
canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red"
var radius = 20
var width = 1
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    color = document.getElementById("color").value
    radius = document.getElementById("radius").value
    width = document.getElementById("linewidth").value
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    x_position = e.clientX - canvas.offsetLeft;
    y_position = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("Current position of X and Y coordinates = ");
        console.log("x = " + x_position + "y = " + y_position);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(x_position, y_position, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}