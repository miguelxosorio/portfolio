let i = 0
let txt = "Hello! My name is Miguel and I make Websites...";
let speed = 80;

function typewriter() {
    if (i < txt.length) {
        document.getElementById('greeting').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}

typewriter();
