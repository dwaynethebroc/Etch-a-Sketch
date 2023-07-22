let grid = document.getElementById("grid");
let cell = document.createElement("div");

for (i = 0; i <= 16; i++){

    let row = document.createElement("div");
    row.backgroundColor = "red";
    row.classList.add(`row`);
    grid.appendChild(row);

    for(j=0; j <= 16; j++){
        cell = document.createElement("div");
        cell.innerText = `div ${j}`
        cell.style.backgroundColor = "aquamarine";
        cell.classList.add(`cell`);
        row.appendChild(cell);
    }


}