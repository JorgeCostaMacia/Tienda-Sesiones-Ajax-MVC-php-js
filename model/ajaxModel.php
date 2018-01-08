<?php

require_once "classDB/DBusser.php";

if(isset($_POST["action"])){
    $bd = new Dbusser("proveedoresCarrito");
    $action = $_POST["action"];
    $loginEmail = $_POST["loginEmail"];
    $_ressultReturn = [];

    // PETICIONES PARA LOGIN O REGISTRO
    if($action == "checkUsser" || $action == "newUsser") {
        $loginPassword = $_POST["loginPassword"];
        if (filter_var($loginEmail, FILTER_VALIDATE_EMAIL)) {
            if ($_POST["action"] == 'checkUsser') {
                $_ressultReturn["index"] = "checkUsser";
                $ressult = $bd->_prepareLogin($loginEmail, $loginPassword);
            }
            else if ($_POST["action"] == 'newUsser') {
                $_ressultReturn["index"] = "newUsser";
                $ressult = $bd->_prepareLogin($loginEmail);
            }

            if ($ressult != null) { $_ressultReturn["ressult"] = 'exist'; }
            else {
                $_ressultReturn["ressult"] = 'noExist';
                if ($_POST["action"] == 'newUsser') { $bd->_prepareGetAccount($loginEmail, $loginPassword); }
            }
        }
        else { $_ressultReturn["ressult"] = 'errorEmail'; }
    }

    // PETICIONES PARA ARTICULOS O PEDIDOS
    if($action == "getSearch"){
        $_ressultReturn["index"] = "";
        $_ressultReturn["ressult"] = [];
        $itemSearch = $_POST["itemSearch"];
        $searchType = $_POST["searchType"];
        $searchSelect = $_POST["searchSelect"];
        $dateInput = $_POST["dateInput"];

        if( $searchSelect == "pedidosFecha" ){ $itemSearch = $dateInput;}

        $whereParameter = ' LIKE ';
        $whereParameterNumped = 'numPedido IN(SELECT numPedido FROM pedidos WHERE nomUsser="' . $loginEmail .'")';
        $whereParameterNomUsser = 'nomUsser="' . $loginEmail . '"';

        if($searchType == "contiene"){ $whereParameter .= '"%' . $itemSearch . '%"'; }
        else if($searchType == "empieza"){ $whereParameter .= '"' . $itemSearch . '%"'; }
        else if($searchType == "termina"){ $whereParameter .= '"%' . $itemSearch . '"'; }

        if($searchSelect == "articulos") {
            $_ressultReturn["index"] = "articulos";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","piezas"));
        }
        else if($searchSelect == "articulosNumero") {
            $_ressultReturn["index"] = "articulos";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","piezas", 'WHERE refPieza' . $whereParameter));
        }
        else if($searchSelect == "articulosPrecio") {
            $_ressultReturn["index"] = "articulos";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","piezas", 'WHERE precioVent' . $whereParameter));
        }
        else if($searchSelect == "pedidos") {
            $_ressultReturn["index"] = "pedidos";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","pedidos", 'WHERE '. $whereParameterNomUsser));
        }
        else if($searchSelect == "pedidosNumPedido") {
            $_ressultReturn["index"] = "pedidos";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","pedidos", 'WHERE numPedido' . $whereParameter, ' AND ' . $whereParameterNomUsser));
        }
        else if($searchSelect == "pedidosFecha") {
            $_ressultReturn["index"] = "pedidos";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","pedidos", 'WHERE fecha' . $whereParameter, ' AND ' . $whereParameterNomUsser));
        }
        else if($searchSelect == "pedidosLinped") {
            $_ressultReturn["index"] = "linped";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","linped", 'WHERE ' . $whereParameterNumped));
        }
        else if($searchSelect == "pedidosCantidad") {
            $_ressultReturn["index"] = "linped";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","linped", 'WHERE cantidad' . $whereParameter . ' AND '. $whereParameterNumped));
        }
        else if($searchSelect == "pedidosNumPieza") {
            $_ressultReturn["index"] = "linped";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","linped", 'WHERE refPieza' . $whereParameter . ' AND '. $whereParameterNumped));
        }
        else if($searchSelect == "pedidosNomPieza") {
            $_ressultReturn["index"] = "linped";
            $_ressultReturn["ressult"] = $bd->format_select($bd->_select("*","linped", 'WHERE refPieza IN(SELECT refPieza FROM piezas WHERE nomPieza' . $whereParameter . ') AND ' . $whereParameterNumped));
        }
    }

    // PETICIONES PARA BORRAR PEDIDO
    if($action == "delPedido"){
        $numPedido = $_POST["numPedido"];
        $_ressultReturn["index"] = "borradoPedido";
        $_ressultReturn["numPedido"] = $numPedido;
        $_ressultReturn["ressult"] = $bd->_delete('pedidos', 'numPedido="' . $numPedido . '"');
    }

    // PETICIONES PARA BORRAR LINEA
    if($action == "delLinea"){
        $numLinea = $_POST["numLinea"];
        $_ressultReturn["index"] = "borradoLinea";
        $_ressultReturn["numLinea"] = $numLinea;
        $_ressultReturn["ressult"] = $bd->_delete('linped', 'numLinea="' . $numLinea . '"');
    }

    echo json_encode($_ressultReturn);
}