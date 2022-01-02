//filas y columnas del tablero
var rows = 3;
var cols = 3;

var turn = 0;

var grid = new Array(rows);


//Inicializar
function initialize(){
    createTable();

}



//Crea tablero
function createTable(){
    var gridContainer = document.getElementById("gridContainer");
    if(!gridContainer){
        console.error("Problem: no div for the grid table!");
    }


    var table = document.createElement("table");

    for(var i=0; i < rows; i++){
        var tr = document.createElement("tr");
        for(var j=0; j < cols; j++){
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "vacio");
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }

    gridContainer.appendChild(table);
}


function cellClickHandler(){
    // this es la celda seleccionada
    var rowcol = this.id.split("_");
    var row = rowcol[0];
    var col = rowcol[1];

    var classes = this.getAttribute("class");
    if((turn == 0) && (classes.indexOf("vacio")>-1)){
        this.setAttribute("class", "p1");
        turn = 1;
    }else if((turn == 1) && (classes.indexOf("vacio")>-1)) {
        this.setAttribute("class", "p2");
        turn = 0;
    }
}


//start everything
window.onload = initialize;