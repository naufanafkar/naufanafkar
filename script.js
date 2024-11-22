setTimeout(() => {
    alert("Selamat datang di THE CREATOR HOODIE")
}, 3000);

const herotext = document.querySelector("#hero h2");
const colors = ["#FF5733","#33FF57","#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    herotext.computedStyleMap.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;    
}

setInterval(changeHeroTextColor,2000);
