"use strict";

/********** BOTON BUSCAR NAVEGADOR ******************/
function addButtonBuscar(){
    let divButton = document.getElementById("submitSearch");

    if(divButton.innerHTML == ""){
        divButton.setAttribute('class', 'button btn btn-default btn btn-primary');
        divButton.setAttribute('type', 'button');

        let buttonText = document.createTextNode("Buscar");

        divButton.appendChild(buttonText);
    }
}

/********** CAMPO FECHA NAVEGADOR ******************/
function addButtonDate() {
    let dateInput = document.getElementById("dateInput");

    dateInput.setAttribute('type', "date");

    let fechaActualObject = new Date();
    let fechaActual = fechaActualObject.getFullYear() + "-" + (fechaActualObject.getMonth() * 1 + 1) + "-" + fechaActualObject.getDate();

    dateInput.setAttribute('value', fechaActual);
    dateInput.setAttribute('max', fechaActual);
    dateInput.setAttribute('min', '2000-01-01');
}

/********** CAMPO FECHA NAVEGADOR ******************/
function removeButtonDate(){
    let dateInput = document.getElementById("dateInput");
    dateInput.setAttribute('type', "hidden");
}

/*************** CAMPOS TOTAL CARRITO ***********************/
function updateTotalChange(totalVentaObject, totalCarritoObject, totalVenta, totalCarrito) {
    totalVentaObject.setAttribute('value', totalVenta);
    totalCarritoObject.setAttribute('value', totalCarrito);
}

function delTrPedidoLinped(numPedidoLinea){
    let trNode = document.getElementById('tr' + numPedidoLinea);
    trNode.remove();
}

/*************** INICIALIZA RESULTADO FORM SEARCH ***********************/
function cleanFormSearch(){
    let titleSearch = document.getElementById("titleSearch");
    let trHead = document.getElementById("trHead");
    let bodyTable = document.getElementById("bodyTable");
    let msjSearchEvents = document.getElementById("msjSearchEvents");
    msjSearchEvents.innerText = "";

    titleSearch.innerHTML = "";
    trHead.innerHTML = "";
    bodyTable.innerHTML = "";
}
