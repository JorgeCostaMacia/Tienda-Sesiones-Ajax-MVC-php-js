"use strict";

// ** EVENTOS PAGINA **
//      PAGINA CARGADA: CARGA EVENTOS
document.onload = addEvents();

// ** EVENTOS PAGINA **
//      EVENTOS FORM LOGIN
//      EVENTOS FORM SEARCH ARTICULOS PEDIDOS
//      EVENTOS FORM CARRITO
function addEvents(){
    let formLoginGetAccount = document.getElementById("formLoginGetAccount");
    if(formLoginGetAccount != null ){ addEventsformLoginGetAccount(); }

    let searchSelect = document.getElementById("searchSelect");
    if(searchSelect != null ){ addEventsSearchSelect(); }

    let carritoForm = document.getElementById("carritoForm");
    if(carritoForm != null ){ addEventsCarritoForm(); }

}

// ** EVENTOS LOGIN **
//      EVALUA FORM LOGIN GETACOUNT
function addEventsformLoginGetAccount(){
    let submitLogin = document.getElementById("submitLogin");
    let submitGetAccount = document.getElementById("submitGetAccount");
    submitLogin.addEventListener("click", evalformLogin);
    submitGetAccount.addEventListener("click", evalformGetAccount);
}

// ** EVENTOS SEARCH ARTICULO PEDIDO **
//      ADD BUTTON SEARCH
function addEventsSearchSelect(){
    let searchSelect = document.getElementById("searchSelect");
    searchSelect.addEventListener("change", addEventsButtonSearch);
}

// ** EVENTOS SELECT SEARCH **
//      ADD DEL INPUT DATE
//      ADD BUTTON BUSCAR - ADD BUTTON EVENTO
function addEventsButtonSearch(){
    let searchSelect = document.getElementById("searchSelect").value;
    if(searchSelect == "pedidosFecha"){ addButtonDate();}
    else { removeButtonDate(); }
    addButtonBuscar();
    let submitSearch = document.getElementById("submitSearch");
    submitSearch.addEventListener("click", getSearchSelect);
}

// ** EVENTOS BUTTONS BUTTONS CARRITO **
//      ADD EVENTOS BUTTONS CANTIDAD
function addEventsCarritoForm() {
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", updateTotal);
    }
}

// ** EVENTOS BUTTONS FORM PEDIDO **
//      ADD EVENTOS BUTTONS BORRAR PEDIDO
function addEventsPedidosForm() {
    let inputs = document.getElementsByName("submitBorrarPedido");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", delPedido);
    }
}

// ** EVENTOS PAGINA **
//      ADD EVENTOS BUTTONS BORRAR LINEA PEDIDO
function addEventsLinpedForm() {
    let inputs = document.getElementsByName("submitBorrarLinped");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", delLinped);
    }
}