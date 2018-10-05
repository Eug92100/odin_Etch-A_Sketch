const container = document.querySelector(".container");
var button = document.querySelector("button");


function gridCreation(parameter){
    for(var i = 1; i <= parameter; i++) {
        const newRow = document.createElement("div");
        container.appendChild(newRow);
        newRow.classList.add("row");
        newRow.style.height = (100 / parameter) + "%";
        for(var j = 1; j <= parameter; j++){
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newCell.style.width = (100 / parameter)+ "%";
            newRow.appendChild(newCell);
        }    
    }
}

function gridRemove() {
    var row = document.querySelector(".row");
    while(row != null){ 
        container.removeChild(row);
        row = document.querySelector(".row");  
    }
}

function hovering(){
    var cells = Array.from(document.querySelectorAll(".cell"));
    cells.forEach(function(cell) { 
        cell.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'rgba(200, 200, 200, 0.8)';
        });
    })
}


function restart(){
    var nb = prompt("Choose the number of small squares!","16");
    gridRemove();
    gridCreation(nb);
    hovering();
    }

gridCreation(16);
hovering();
button.addEventListener('click',restart);

