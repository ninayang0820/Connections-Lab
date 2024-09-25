let canvas;
let emoji = [];

function preload() {
    for (let i = 0; i < 12; i++) {
        emoji[i] = loadImage("assets/" + i + ".png");
    }
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5canvas');
    canvas.style('position', 'absolute');
    imageMode(CENTER);
}

function draw() {
    background(235, 234, 230);

    let index = 0;
    for (let i = 0; i < 6; i++) {
        let x = map(i, 0, 5, width * 0.1, width * 0.9);
        let y = height * 0.2 + 100;
        if (i <= 1 || i >= 4) {
            image(emoji[index], x, y, 80, 80);
            index++;
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let x = map(i, 0, 5, width * 0.1, width * 0.9);
            let y = map(j, 0, 1, height * 0.6, height * 0.7) + 150;
            image(emoji[index], x, y, 80, 80);
            index++;
        }
    }
    for (let i = 4; i < 6; i++) {
        for (let j = 0; j < 2; j++) {
            let x = map(i, 0, 5, width * 0.1, width * 0.9);
            let y = map(j, 0, 1, height * 0.6, height * 0.7) + 150;
            image(emoji[index], x, y, 80, 80);
            index++;
        }
    }
}

function windowResized() {
    canvas = resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener('load', () => {
    let sandwiches = [];

    fetch('assets/sandwiches.json')
        .then(response => response.json())
        .then(data => {
            sandwiches = data.sandwiches;
        })

    let but = document.getElementById('randomButton');

    but.addEventListener('click', function () {
        if (sandwiches.length > 0) {
            let index = Math.floor(Math.random() * sandwiches.length);
            let f = sandwiches[index];

            foodName.textContent = f.name;
            desc.textContent = f.description;
        }
    });
});
