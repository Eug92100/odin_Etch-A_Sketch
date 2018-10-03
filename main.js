const container = document.querySelector(".container");
container.setAttribute("style","min-width: 400px;")

console.log(container);

for(var i = 1; i <= 16; i++) {
    const newColumn = document.createElement("div");
    container.appendChild(newColumn);
    newColumn.classList.add("column");
    newColumn.setAttribute('style', 'display: flex; flex-direction: row; height: 6.25%;');
    for(var j = 1; j <= 16; j++){
        const newRow = document.createElement("div");
        newRow.classList.add("cell");
        newColumn.appendChild(newRow);
        newRow.setAttribute('style', 'display: flex; flex-direction: column; border: 1px solid blue; width: 6.25%;');
    }
     
}

