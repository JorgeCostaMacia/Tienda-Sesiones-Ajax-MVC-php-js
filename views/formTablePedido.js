"use strict";

/********** CREA FORMULARIO pedidos ******************/
function getFormViewPedidos(ressult){
    let formArticulosPedidos = document.getElementById("formArticulosPedidos");

    let titleSearch = document.getElementById("titleSearch");
    let nodeText = document.createTextNode("Pedidos");
    titleSearch.appendChild(nodeText);

    let trHead = document.getElementById("trHead");

    let thNode = document.createElement('th');
    let thText = document.createTextNode("Numero pedido");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Usuario");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Fecha");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Borrar");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    let bodyTable = document.getElementById("bodyTable");

    for(let i = 0; i < ressult.length; i++){
        let trNode = document.createElement('tr');
        trNode.setAttribute('id', 'tr' + ressult[i]["numPedido"]);
        trNode.setAttribute('name', ressult[i]["numPedido"]);
        let tdNode = document.createElement('td');
        let tdText = document.createTextNode(ressult[i]["numPedido"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["nomUsser"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["fecha"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        let tdInput = document.createElement('input');
        tdInput.setAttribute('type', 'button');
        tdInput.setAttribute('id', ressult[i]["numPedido"]);
        tdInput.setAttribute('name', 'submitBorrarPedido');
        tdInput.setAttribute('value', 'Borrar pedido');
        tdInput.setAttribute('class', 'btn btn-danger btn-block');
        let inputText = document.createTextNode('Borrar pedido');
        tdInput.appendChild(inputText);
        tdNode.appendChild(tdInput);
        trNode.appendChild(tdNode);

        bodyTable.appendChild(trNode);
    }
}