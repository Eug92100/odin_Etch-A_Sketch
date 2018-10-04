const container = document.querySelector(".container");
var button = document.querySelector("button");


function gridCreation(parameter){
    for(var i = 1; i <= parameter; i++) {
        const newRow = document.createElement("div");
        container.appendChild(newRow);
        newRow.classList.add("row");
        for(var j = 1; j <= parameter; j++){
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newRow.appendChild(newCell);
        }    
    }
}

function gridRemove() {
    var row = document.querySelector(".row");
    while(row != null){
        console.log(row);
        container.removeChild(row);
        row = document.querySelector(".row");  
}
}

function hovering(){
    var cells = Array.from(document.querySelectorAll(".cell"));
    cells.forEach(function(cell) { 
        cell.addEventListener('mouseover', function(e){
            e.target.setAttribute('style','background-color: blue;');
        });})
}


function restart(){
    var nb = prompt("Choose the number of small squares!");
    gridRemove();
    gridCreation(nb);
    hovering();
    }

gridCreation(16);
hovering();
button.addEventListener('click',restart);

