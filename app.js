function addRow() {
          
    var myName = document.getElementById("name");
    var number = document.getElementById("number");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= myName.value;
    row.insertCell(1).innerHTML= number.value;
    row.insertCell(2).innerHTML= '<button type="button" class = "button2" onClick="Javacsript:deleteRow(this)">Delete</button>';
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}
 
function addTable() {
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}

function annotate(){
    var pname= document.getElementById("name").value;
    var pnumber= document.getElementById("number").value;
    document.getElementById("pname").innerHTML= pname;
    document.getElementById("pnumber").innerHTML= pnumber;
  }

function load() {
    console.log("Loaded");
}

document.getElementById("mybutton").onclick = function () {
    location.href = "add.htm";
};
