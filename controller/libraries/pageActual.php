<?php

// ** EVALUA PAGE **
//      RECOGE VALORES GET PAGE
//      RETURN TITLE
function getTitlePage(){
    if(isset($_GET["page"]) || isset($_SESSION["usuario"])){
        if(isset($_SESSION["usuario"])){ $page = "home"; }
        else { $page = $_GET["page"]; }

        if( $page == "home"){ echo "Home"; }
        else if($page == "carrito") { echo "Carrito"; }
    }
    else  { echo "Login"; }
}

// ** EVALUA PAGE **
//      RECOGE VALORES GET PAGE
//      ASIGNA VALOR PAGE - RETURN PAGE
function getPageText(){
    $page = "";
    if(isset($_GET["page"])){
        if($_GET["page"] != "carrito") { $page = "home"; }
        else { $page = $_GET["page"]; }
    }
    return $page;
}