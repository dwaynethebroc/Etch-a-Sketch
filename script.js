//create DOM elements for grid, row, cell, and button
let grid = document.getElementById("grid");
let row = document.getElementsByClassName("row");
let cell = document.getElementsByClassName("cell");
let button = document.getElementById("numberOfSquares");


//when button is clicked, activate changeGrid
button.addEventListener("click", changeGridSize);

//when hovering over div, change background color to random color
function changeColor() {
    //this.classList.add('hovered'); <--- alternative option by linking CSS class to hovered item with background color stored there, can't be random color however
    this.style.backgroundColor = randomRgbColor();
}

//creates random RGB value for background color, plugs into changeColor()
const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//buids initial grid of 16x16 squares, adds classes, and appends to parent DIV
function buildGrid(gridSize) {
    for (i = 1; i <= gridSize; i++){
        row = document.createElement("div");
        row.classList.add(`row`);
        grid.appendChild(row);
    
        for(j=1; j <= gridSize; j++){
            cell = document.createElement("div");
            cell.classList.add(`cell`);
            cell.addEventListener("mouseover", changeColor);
            row.appendChild(cell);
        }
    }
}

//deletes grid and is called within changeGridSize function. While child node exists, delete childNode from parentNode ("grid")
function clearGrid(){

    let divs = grid.getElementsByTagName("div")

    while(divs[0]){
        divs[0].parentNode.removeChild(divs[0]);
    }
}

//takes input from user on what size grid they want, converts to number value, verifys it's a number between 1-100
//after verification it clears grid, and then proceeds to build a new grid,
function changeGridSize(){
    let response = prompt('Enter the number of squares on the grid you would like to see? Please only include a number between 1-100.', '');
    let input = Number(response);

    if(input > 100 || input < 1){
        changeGridSize();
    }
    else if (input === Number){
        console.log(typeof(input))
        changeGridSize();
    }
    else{
        clearGrid();
        buildGrid(input);
    }
}

//initial grid
buildGrid(16);

