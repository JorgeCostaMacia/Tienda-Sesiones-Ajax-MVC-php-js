/********** CREA FORMULARIO ARTICULOS ******************/
function getFormViewArticulos(ressult){
    let formArticulosPedidos = document.getElementById("formArticulosPedidos");
    formArticulosPedidos.setAttribute('action', 'index.php?page=carrito');

    let titleSearch = document.getElementById("titleSearch");
    let nodeText = document.createTextNode("Articulos");
    titleSearch.appendChild(nodeText);

    let trHead = document.getElementById("trHead");

    let thNode = document.createElement('th');
    let thText = document.createTextNode("Imagen");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Ref articulo");
    thNode.appendChild(thText);
    trHead.appendChild(thNode);

    thNode = document.createElement('th');
    thText = document.createTextNode("Nombre articulo");
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

    let bodyTable = document.getElementById("bodyTable");

    for(let i = 0; i < ressult.length; i++){
        let trNode = document.createElement('tr');

        let tdNode = document.createElement('td');
        let imgNode = document.createElement('img');
        imgNode.setAttribute('src', ressult[i]["ruta_imagen"]);
        tdNode.appendChild(imgNode);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["refPieza"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["nomPieza"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        tdText = document.createTextNode(ressult[i]["precioVent"]);
        tdNode.appendChild(tdText);
        trNode.appendChild(tdNode);

        tdNode = document.createElement('td');
        let tdInput = document.createElement('input');
        tdInput.setAttribute('type', 'number');
        tdInput.setAttribute('class', 'form-control');
        tdInput.setAttribute('min', 0);
        tdInput.setAttribute('value', 0);
        tdInput.setAttribute('name', ressult[i]["refPieza"]);
        tdNode.appendChild(tdInput);
        trNode.appendChild(tdNode);

        bodyTable.appendChild(trNode);
    }

    let trNode = document.createElement('tr');
    let tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    let tdInput = document.createElement('input');
    tdInput.setAttribute('type', 'submit');
    tdInput.setAttribute('id', 'submitArticulo');
    tdInput.setAttribute('name', 'submitArticulo');
    tdInput.setAttribute('class', 'btn btn-primary btn-block');
    tdInput.setAttribute('value', 'Registrar selecciones');
    tdNode.appendChild(tdInput);
    trNode.appendChild(tdNode);
    bodyTable.appendChild(trNode);

    trNode = document.createElement('tr');
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    tdNode = document.createElement('td');
    trNode.appendChild(tdNode);
    bodyTable.appendChild(trNode);
}