"use strict";

// ** SEARCH ARTICULOS PEDIDOS **
//      RECOGE DATOS: FORM BUSQUEDA - NOMUSSER
//      GENERA PARAMETROS AJAX
//      LLAMA BD PARA BUSCAR ARTICULO O PEDIDO
function getSearchSelect(){
    let loginEmail = document.getElementById("loginEmail").value;
    let itemSearch = document.getElementById("itemSearch").value;
    let searchType = document.getElementById("searchType").value;
    let searchSelect = document.getElementById("searchSelect").value;
    let dateInput = document.getElementById("dateInput").value;

    let parametros = "action=getSearch" + "&loginEmail=" + loginEmail + '&searchType=' + searchType + '&itemSearch=' + itemSearch + '&searchSelect=' + searchSelect + '&dateInput=' + dateInput;

    if(searchSelect == "articulos") { ajaxQuery('model/ajaxModel.php',parametros,'getFormArticulos','POST',0); }
    else if(searchSelect == "articulosNumero") { ajaxQuery('model/ajaxModel.php',parametros,'getFormArticulos','POST',0); }
    else if(searchSelect == "articulosPrecio") { ajaxQuery('model/ajaxModel.php',parametros,'getFormArticulos','POST',0); }
    else if(searchSelect == "pedidos") { ajaxQuery('model/ajaxModel.php',parametros,'getFormPedidos','POST',0); }
    else if(searchSelect == "pedidosNumPedido") { ajaxQuery('model/ajaxModel.php',parametros,'getFormPedidos','POST',0); }
    else if(searchSelect == "pedidosFecha") { ajaxQuery('model/ajaxModel.php',parametros,'getFormPedidos','POST',0); }
    else if(searchSelect == "pedidosLinped") { ajaxQuery('model/ajaxModel.php',parametros,'getFormPedidos','POST',0); }
    else if(searchSelect == "pedidosCantidad") { ajaxQuery('model/ajaxModel.php',parametros,'getFormPedidos','POST',0);}
    else if(searchSelect == "pedidosNumPieza") { ajaxQuery('model/ajaxModel.php',parametros,'getFormPedidos','POST',0); }
    else if(searchSelect == "pedidosNomPieza") { ajaxQuery('model/ajaxModel.php',parametros,'getFormPedidos','POST',0);}
}

// ** RETURN AJAX QUERY SEARCH ARTICULOS **
//      RECOGE CONSULTA BD
//      INICIALIZA MENSAJES Y PLANTILLA FORM SEARCH
//      EVALUA RESSULT CONSULTA
//      MONTA FORMULARIOS CON DATOS CONSULTA
//      SI FALLA MUESTRA ADVERTENCIAS
function getFormArticulos(resultado){
    let ressult = JSON.parse(resultado);

    cleanFormSearch();

    if(Object.keys(ressult).length == 0 ){ msjErrorSearch("Error en la busqueda"); }
    else if(ressult["ressult"].length == 0 ){ msjErrorSearch("No existe la pieza buscada"); }
    else if(ressult["index"] == "articulos"){ getFormViewArticulos(ressult["ressult"]); }
}

// ** RETURN AJAX QUERY SEARCH PEDIDOS **
//      RECOGE CONSULTA BD
//      INICIALIZA MENSAJES Y PLANTILLA FORM SEARCH
//      EVALUA RESSULT CONSULTA
//      MONTA FORMULARIOS CON DATOS CONSULTA
//      AGREGA EVENTOS A INPUTS FORM
//      SI FALLA MUESTRA ADVERTENCIAS
function getFormPedidos(resultado){
    let ressult = JSON.parse(resultado);

    cleanFormSearch();

    if(Object.keys(ressult).length == 0 ){ msjErrorSearch("Error en la busqueda"); }
    else if(ressult["index"] == "pedidos"){
        if(ressult["ressult"].length == 0 ){ msjErrorSearch("No existe el pedido buscado"); }
        else {
            getFormViewPedidos(ressult["ressult"]);
            addEventsPedidosForm();
        }
    }
    else if(ressult["index"] == "linped"){
        if(ressult["ressult"].length == 0 ){ msjErrorSearch("No existe la linea pedido buscada"); }
        else {
            getFormLinPed(ressult["ressult"]);
            addEventsLinpedForm();
        }
    }
}

// ** UPDATE PEDIDO **
//      RECOGE VALORES: INPUT QUE ACCIONA EL EVENTO - NOMUSSER
//      GENERA PARAMETROS AJAX
//      LLAMA BD PARA BORRAR PEDIDO
function delPedido(event){
    let loginEmail = document.getElementById("loginEmail").value;
    let numPedido = event.target.id;

    let parametros = "action=delPedido" + "&loginEmail=" + loginEmail + '&numPedido=' + numPedido;
    ajaxQuery('model/ajaxModel.php',parametros,'setDelPedido','POST',0);
}

// ** RETURN AJAX QUERY UPDATE PEDIDO **
//      RECOGE CONSULTA BD
//      EVALUA RESSULT CONSULTA
//      ELIMINA PEDIDO DE FORM
//      SI FALLA MUESTRA ADVERTENCIAS
function setDelPedido(resultado){
    let ressult = JSON.parse(resultado);

    if(Object.keys(ressult).length == 0 ){ msjErrorSearch("Error en la eliminacion"); }
    else if(ressult["index"] == "borradoPedido") {
        if (ressult["ressult"] == 0) { msjErrorSearch("No existe el pedido a eliminar"); }
        else {
            delTrPedidoLinped(ressult["numPedido"]);
            msjSuccesSearch("Se ha borrado el pedido correctamente");
        }
    }
}


// ** UPDATE LINPED **
//      RECOGE VALORES: INPUT QUE ACCIONA EL EVENTO - NOMUSSER
//      GENERA PARAMETROS AJAX
//      LLAMA BD PARA BORRAR LINPED
function delLinped(event){
    let loginEmail = document.getElementById("loginEmail").value;
    let numLinea = event.target.id;

    let parametros = "action=delLinea" + "&loginEmail=" + loginEmail + '&numLinea=' + numLinea;
    ajaxQuery('model/ajaxModel.php',parametros,'setDelLinped','POST',0);
}

//RETURN AJAX QUERY UPDATE LINPED **
//    RECOGE CONSULTA BD
//    EVALUA RESSULT CONSULTA
//    ELIMINA LINPED DE FORM
//SI FALLA MUESTRA ADVERTENCIAS
function setDelLinped(resultado){
    let ressult = JSON.parse(resultado);

    if(Object.keys(ressult).length == 0 ){ msjErrorSearch("Error en la eliminacion"); }
    else if(ressult["index"] == "borradoLinea") {
        if (ressult["ressult"] == 0) { msjErrorSearch("No existe la linea a eliminar"); }
        else {
            delTrPedidoLinped(ressult["numLinea"]);
            msjSuccesSearch("Se ha borrado la linea correctamente");
        }
    }
}