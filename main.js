for(var i = 0; i < 16; i++) {
    for(var j = 0; j < 16; j++){
    var container = document.querySelector(".container");
    var div = document.createElement("div");
    div.className = "row " + j + " column " + i;
    container.appendChild(div);
    }
}