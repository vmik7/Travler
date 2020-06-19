
// set nav__item border color
var navItems = document.getElementsByClassName("nav__item");
var navColors = [ '#6017a3', '#701dbb', '#8038c2', '#a34ff0' ];

console.log(navItems);
console.log(navColors);

var currentColor = 0,
    colorDelta = 1;

for (var i = 0; i < navItems.length; i++) {
    navItems[i].style.borderColor = navColors[currentColor];
    currentColor += colorDelta;
    if (currentColor < 0 || currentColor >= navColors.length) {
        colorDelta *= -1;
        currentColor += 2 * colorDelta;
    }
}