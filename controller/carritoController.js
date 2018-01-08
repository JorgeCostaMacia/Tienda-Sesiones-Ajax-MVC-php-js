"use strict";

// ** UPDATE CAMPOS TOTAL CARRITO **
//      RECOGE VALORES: INPUT QUE ACCIONA EL EVENTO - TOTAL ARTICULO - TOTAL CARRITO
//      EVALUA SI SE HA SUMADO O RESTADO
//      ACTUALIZA TOTALES
function updateTotal(event) {
    let inputName = event.target.name;
    let inputNuevoValor = event.target.value;

    let totalCarritoObject = document.getElementById('totalCarrito');
    let totalCarrito = parseInt(totalCarritoObject.value);

    let precioVentaObject = document.getElementById('precio' + inputName);
    let totalVentaObject = document.getElementById('total' + inputName);

    let precioVenta = parseInt(precioVentaObject.value);
    let totalVenta = parseInt(totalVentaObject.value);

    let cantInicial = totalVenta / precioVenta;

    if(cantInicial > inputNuevoValor ){
        let difCantidad = cantInicial - inputNuevoValor;
        totalVenta -= difCantidad * precioVenta;
        totalCarrito -= difCantidad * precioVenta;
    }
    else if(cantInicial < inputNuevoValor ){
        let difCantidad = inputNuevoValor - cantInicial;
        totalVenta += difCantidad * precioVenta;
        totalCarrito += difCantidad * precioVenta;
    }

    updateTotalChange(totalVentaObject, totalCarritoObject, totalVenta, totalCarrito);
}