const container = document.querySelector(".container");

function gridCreation(parameter){
    for(var i = 1; i <= parameter; i++) {
        const newColumn = document.createElement("div");
        container.appendChild(newColumn);
        newColumn.classList.add("column");
        //newColumn.setAttribute('style','height: (100 / parameter)%')
        for(var j = 1; j <= parameter; j++){
            const newRow = document.createElement("div");
            newRow.classList.add("cell");
            newColumn.appendChild(newRow);
        }    
    }
}



var button = document.querySelector("button");
function restart(){
    var nb = prompt("Choose the number of small squares!");
    cells.forEach((cell) => cell.setAttribute('style','background-color: white;'));
    gridCreation(nb);
}

gridCreation(30);

var cells = Array.from(document.querySelectorAll(".cell"));
cells.forEach(function(cell) { 
    cell.addEventListener('mouseover', function(e){
        e.target.setAttribute('style','background-color: blue;');
})})

button.addEventListener('click',restart);