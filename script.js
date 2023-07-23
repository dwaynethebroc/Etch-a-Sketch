let grid = document.getElementById("grid");
let cell = document.createElement("div");

for (i = 1; i <= 16; i++){

    let row = document.createElement("div");
    row.classList.add(`row`);
    grid.appendChild(row);

    for(j=1; j <= 16; j++){
        cell = document.createElement("div");
        cell.classList.add(`cell`);
        row.appendChild(cell);
    }


}