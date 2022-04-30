menuListArray = ["Pizza Vegetariana",
                 "Pizza de Frango",
                 "Pizza portuguesa",
                 "Pizza quatro queijos",
                 "Pizza de Calabresa",
                 "Pizza Extravaganza"];

function getMenu(){
var htmldata;
menubar.menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + 'br'
}
document.getElementById("displayMenu").innerHTML=htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i] + 'br';
}
document.getElementById("displayAddedMenu").innerHTML=htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}