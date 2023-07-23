let grid = document.getElementById("grid");
let cell = document.getElementsByClassName("cell");

function changeColor() {
    this.classList.add('hovered');
    
}


for (i = 1; i <= 16; i++){

    let row = document.createElement("div");
    row.classList.add(`row`);
    grid.appendChild(row);

    for(j=1; j <= 16; j++){
        cell = document.createElement("div");
        cell.classList.add(`cell`);
        cell.addEventListener("mouseover", changeColor);
        row.appendChild(cell);
    }
}


