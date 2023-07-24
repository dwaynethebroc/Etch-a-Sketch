let grid = document.getElementById("grid");
let row = document.getElementsByClassName("row");
let cell = document.getElementsByClassName("cell");
let button = document.getElementById("numberOfSquares");
let gridSize = 16;
let input;
let response;

button.addEventListener("click", changeGridSize);

function changeColor() {
    this.classList.add('hovered');
}

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

function clearGrid(gridSize){
    for (i = gridSize; i > 0; i--){
        row.classList.remove('row');
        grid.removeChild(row);

        for(j = gridSize; j > 0; j--){
            cell.classList.remove('cell');
            cell.removeEventListener("mouseover", changeColor);
            row.removeChild(cell);
        }
    }
    
}

function changeGridSize(){
    response = prompt('Enter the number of squares on the grid you would like to see? Please only include a number between 1-100.', '');
    console.log(response);
    input = Number(response);
    console.log(typeof(input));
    console.log(input);

    while(input > 100 && input < 1 && input !== typeof(Number)){
        changeGridSize();
    }

    gridSize = input;
    clearGrid(gridSize);

        
    for (i = 1; i <= input; i++){

        let row = document.createElement("div");
        row.classList.add(`row`);
        grid.appendChild(row);

        for(j=1; j <= input; j++){
            cell = document.createElement("div");
            cell.classList.add(`cell`);
            cell.addEventListener("mouseover", changeColor);
            row.appendChild(cell);
        }
    }
}

buildGrid(gridSize);

