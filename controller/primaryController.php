<?php

// ** PAGE = LOGIN **
//      BORRA GET POST
//      BORRA SESION
//      CARGA FORM LOGIN
//      DESCONECTA DE BD
if(isset($_GET["page"])){
    if($_GET["page"] == "login"){
        unset($_GET);
        unset($_POST);
        $_SESSION = [];
        session_destroy();
        include_once "views/assets/login.php";
    }
}

// ** !SESSION && !POST LOGIN **
//      CARGA FORM LOGIN
if(!isset($_SESSION['usuario']) && !isset($_POST["loginEmail"]) && !isset($_POST["loginPassword"]) ) { include_once "views/assets/login.php"; }

// ** POST FORM LOGIN **
//      CREA SESION = NEW USUARIO = CARRITO USUARIO + LOGIN USUARIO
if(isset($_POST["loginEmail"]) && isset($_POST["loginPassword"])) { $_SESSION['usuario'] = new Usuario($_POST["loginEmail"]); }

// ** SESION USUARIO **
//      RECOGE GET PAGE
if(isset($_SESSION['usuario'])) {
    $page = getPageText();

    // ** CARRITO **
    //      CARGA CONTROLLER CARRITO
    if($page == "carrito" ){ include_once "controller/carritoController.php"; }
    // ** !CARRITO **
    //      CARGA NAV HOME - CONTROL CARRITO = FALSE
    else {
        include_once "views/layout/navHome.php";
        if(isset($_SESSION["recibidoArticulos"])) { $_SESSION["recibidoArticulos"] = false; }
    }
    // ** CARGA PLANTILLA FORM ARTICULOS PEDIDOS **
    include_once "views/assets/articulosPedidos.php";
}