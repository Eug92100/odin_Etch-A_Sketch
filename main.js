const container = document.querySelector(".container");


for(var i = 1; i <= 16; i++) {
    const newColumn = document.createElement("div");
    container.appendChild(newColumn);
    newColumn.classList.add("column");
    for(var j = 1; j <= 16; j++){
        const newRow = document.createElement("div");
        newRow.classList.add("cell");
        newColumn.appendChild(newRow);
    }    
}

var cells = Array.from(document.querySelectorAll(".cell"));
cells.forEach(function(cell) { 
    addEventListener('mouseover', function(e){
    e.target.setAttribute('style','background-color: blue;');
})})