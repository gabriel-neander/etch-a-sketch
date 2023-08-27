let color = "black";

function populateBoard(size) {
    let board = document.querySelector('.screen');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mousedown", startPainting);
        square.addEventListener("mouseup", stopPainting);
        square.addEventListener("mousemove", colorSquare);
        square.style.backgroundColor = 'white';
        square.style.border = '1px solid rgba(0, 0, 0, 0.1)';
        board.insertAdjacentElement("beforeend", square);
    }
}
populateBoard(32)

function changeSize(input) {
    if(input >= 2 && input <=100) {
        populateBoard(input);
    } else {
        alert("You got off limits!")
        location.reload();
    }
}

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function colorSquare() {
    if (painting) {
        this.style.backgroundColor = color;
    }
}

// Rainbow function

let colorIndex = 0;
const rainbowColors = ['yellow', 'pink', 'blue', 'orange', 'purple', 'red', 'cyan', 'magenta', 'lime', 'brown', 'indigo', 'teal', 'olive', 'navy', 'maroon', 'fuchsia', 'silver', 'aqua', 'black', 'green'];

function changeToRainbows() {
    colorIndex = (colorIndex + 1) % rainbowColors.length;
    const selectedColor = rainbowColors[colorIndex];
    changeColor(selectedColor);
}

function changeColor(choice) {
    color = choice;
}

//Clear board 

function clearBoard() {
    let squares = document.querySelectorAll('.screen > div');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}