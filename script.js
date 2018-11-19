/*чтобы она в принципе рисовала*/

var canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

var mouse = { x:0, y:0 };

var draw = false;

canvas.addEventListener("mousedown", function() {
 mouse.x = event.pageX - this.offsetLeft;
 mouse.y = event.pageY - this.offsetTop;
 draw = true;
 context.beginPath();
 context.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", function() {
if (draw == true) {
mouse.x = event.pageX - this.offsetLeft;
mouse.y = event.pageY - this.offsetTop;
context.lineTo(mouse.x, mouse.y);
context.stroke();
}
});

canvas.addEventListener("mouseup", function() {
mouse.x = event.pageX - this.offsetLeft;
mouse.y = event.pageY - this.offsetTop;
context.lineTo(mouse.x, mouse.y);
context.stroke();
context.closePath();
draw = false;
});

/*стили кнопок цвета*/

var borderStyleRed = "#E74C3C";
var borderStylePurple = "#8E44AD";
var borderStyleBlue = "#3498DB";
var borderStyleGreen = "#2ECC71";
var borderStyleOrange = "#E67E22";


function divBorder(x, a, b, c, d, e) {
x.addEventListener ("click", function() {
x.style.border = "2px solid" + e;
a.style.border = "2px solid silver";
b.style.border = "2px solid silver";
c.style.border = "2px solid silver";
d.style.border = "2px solid silver";
context.strokeStyle = e;
});
}

divBorder(red, purple, blue, green, orange, borderStyleRed);
divBorder(purple, red, blue, green, orange, borderStylePurple);
divBorder(blue, red, purple, green, orange, borderStyleBlue);
divBorder(green, red, purple, blue, orange, borderStyleGreen);
divBorder(orange, red, purple, blue, green, borderStyleOrange);

/*стили кнопок толщины*/

thin.addEventListener ("click", function() {
thin.style.border = "2px solid black";
normal.style.border = "2px solid silver";
thick.style.border = "2px solid silver";
context.lineWidth = 2;
});

normal.addEventListener ("click", function() {
normal.style.border = "2px solid black";
thin.style.border = "2px solid grey";
thick.style.border = "2px solid grey";
context.lineWidth = 4;
});

thick.addEventListener ("click", function() {
thick.style.border = "2px solid black";
thin.style.border = "2px solid grey";
normal.style.border = "2px solid grey";
context.lineWidth = 8;
});

/*очистка холста*/

clear.addEventListener ("click", function() {
context.clearRect(0, 0, canvas.width, canvas.height);
});

/*общение м/у вкладками*/

var storageHandler = function() {
var content = canvas.toDataURL();
sessionStorage.setItem("myKey", content);
context.clearRect(0, 0, canvas.width, canvas.height);
};

window.addEventListener ("storage", storageHandler, false);

/*сохранение*/

save.addEventListener ("click", function() {
var content = canvas.toDataURL();
localStorage.setItem("myKey", content);
});

/*загрузка из local storage при запуске*/

window.addEventListener ("load", function() {
var savedImage = localStorage.getItem("myKey");
var img = new Image();
img.src = savedImage;
img.onload = function() {
  context.drawImage(img, 0, 0);
}
});

/*загрузка кнопкой из session storage*/

load.addEventListener ("click", function() {
var savedImage = sessionStorage.getItem("myKey");
var img = new Image();
img.src = savedImage;
img.onload = function() {
  context.drawImage(img, 0, 0);
}
});
