"use strict";

/********** CREA FORMULARIO LINEA PEDIDO ******************/
function getFormLinPed(ressult){
    let formArticulosPedidos = document.getElementById("formArticulosPedidos");

    let titleSearch = document.getElementById("titleSearch");
    let nodeText = document.createTextNode("Linea pedido");
    titleSearch.appendChild(nodeText);

    let trHead = document.getElementById("trHead");

    let thNode = document.createElement('th');
    let thText = document.createTextNode("Numero linea pedido");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Numero pedido");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Ref articulo");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Precio €");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Cantidad");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Total €");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Borrar");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    let bodyTable = document.getElementById("bodyTable");

    for(let i = 0; i < ressult.length; i++){
        let trNode = document.createElement('tr');
        trNode.setAttribute('id', 'tr' + ressult[i]["numLinea"]);
        trNode.setAttribute('name', ressult[i]["numLinea"]);
        let tdNode = document.createElement('td');
        let tdText = document.createTextNode(ressult[i]["numLinea"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["numPedido"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["refPieza"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["precioCompra"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["cantidad"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["cantidad"] * ressult[i]["precioCompra"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        let tdInput = document.createElement('input');
        tdInput.setAttribute('type', 'button');
        tdInput.setAttribute('id', ressult[i]["numLinea"]);
        tdInput.setAttribute('name', 'submitBorrarLinped');
        tdInput.setAttribute('value', 'Borrar linea pedido');
        tdInput.setAttribute('class', 'btn btn-danger btn-block');
        let inputText = document.createTextNode('Borrar linea pedido');
        tdInput.appendChild(inputText);
        tdNode.appendChild(tdInput);
        trNode.appendChild(tdNode);

        bodyTable.appendChild(trNode);
    }
}