<?php

// ** CARGA NAV CARRITO **
include_once "views/layout/navCarrito.php";

// ** SUBMIT CARRITO - SEARCH ARTICULO **
//      EVALUA SI HAY SUBMITARTICULOS
//      RECORRE FORMARTICULO Y CARRITO
//      ACTUALIZA CARRITO CON ARTICULOS FORM
//      GUARDA CARRITO - VAR CONTROL
if(isset($_POST["submitArticulo"])) {
    foreach ($_POST as $key => $value) {
        if ($key != 'submitArticulo' && $value != 0) {
            $exist = false;
            foreach ($_SESSION['usuario']->getCarrito() as $key2 => $value2) {
                if ($key == $value2->getRefPieza()) {
                    $exist = true;
                    if(!isset($_SESSION["recibidoArticulos"])) { $value2->setCantidad($value2->getCantidad() + $value); }
                }
            }
            if (!$exist) { $_SESSION['usuario']->addCarrito(new Pieza($key,"", $value)); }
        }
    }
    $_SESSION["recibidoArticulos"] = true;
}

// ** MOSTRAR CARRITO **
//      EVALUA SI HAY SUBMIT CARRITO
//      NO HAY SUBMIT:
//      NO HAY CARRITO: MUESTRA ADVERTENCIA
//      HAY CARRITO: CARGA VISTA CARRITO
//      HAY SUBMIT:
//      REALIZA ACCION SOBRE SESION Y/O BD
if(!isset($_POST["procesarCarrito"]) && !isset($_POST["guardarCarrito"]) && !isset($_POST["borrarCarrito"])){
    if(count($_SESSION["usuario"]->getCarrito()) == 0){ include_once "views/assets/msjNoCarrito.php"; }
    else { include_once "views/assets/carrito.php"; }
}
else {
    $_SESSION['usuario']->updateCarrito();

    include_once "views/libraries/msjCarrito.php";

    if(isset($_POST["borrarCarrito"])){
       $_SESSION["usuario"]->borrarCarrito();
       msjSuccBorradoCarrito();
    }
    else if(count($_SESSION["usuario"]->getCarrito()) == 0){
        $_SESSION["usuario"]->borrarCarrito();
        msjSuccBorradoCarrito();
    }
    else if(isset($_POST["procesarCarrito"])){
        $ressult =  $_SESSION["usuario"]->procesarCarrito();
        $error = false;
        $errores = "";
        foreach($ressult as $result){
            if($result["ressult"] == false){
                $errores .=  $result["numError"] . " - " . $result["error"] . '<br>';
                $error = true;
            }
        }
        if(!$error){
            $_SESSION["usuario"]->borrarCarrito();
            msjSuccProcesadoCarrito();
        }
        else if($error){ msjDangerProcesadoCarrito($errores); }
    }
    else if(isset($_POST["guardarCarrito"])){
        $ressult =  $_SESSION["usuario"]->guardarCarrito();
        $error = false;
        $errores = "";
        foreach($ressult as $result){
            if($result["ressult"] == false){
                $errores .=  $result["numError"] . " - " . $result["error"] . '<br>';
                $error = true;
            }
        }
        if(!$error){ msjSuccGuardadoCarrito(); }
        else if($error){ msjDangerGuardadoCarrito($errores); }
    }
}