const container = document.querySelector(".container");

console.log(container);

for(var i = 1; i <= 16; i++) {
    const newColumn = document.createElement("div");
    container.appendChild(newColumn);
    newColumn.classList.add("column_" + i);
    newColumn.setAttribute('style', 'display: flex; flex-direction: row; border: solid;');
    for(var j = 1; j <= 16; j++){
        const newRow = document.createElement("div");
        newRow.classList.add("row_"+ j);
        newColumn.appendChild(newRow);
        newRow.setAttribute('style', 'display: flex; flex-direction: column;');
    }
     
}