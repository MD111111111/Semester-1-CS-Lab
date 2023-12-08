function changeColor(squareid) {
var square = document.getelementbyid(squareid)
var randomColor = getRandomColor() ;
}

function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#'
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
function flashColors() {
    var flashes = document.querySelectorAll(".flash");
    flashes.forEach(getRandomColor)
    
    }
    
    setInterval(flashColors,100)
