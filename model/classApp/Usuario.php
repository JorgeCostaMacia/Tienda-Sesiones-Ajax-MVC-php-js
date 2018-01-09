<?php

require_once "model/classApp/Pieza.php";
require_once "model/classDB/DBusser.php";

// CREA OBJETO CON SUS DATOS EN BD O SESION
class Usuario {
    private $nomUsser;
    private $carrito;

    public function __construct($nomUsserPar){
        $this->nomUsser = $nomUsserPar;
        $this->carrito = [];

        $_connection = new DBusser("proveedoresCarrito");

        $carritoAux = $_connection->format_select($_connection->_select('*', 'carrito', 'WHERE nomUsser=' . '"' . $nomUsserPar . '"'));

        if(count($carritoAux) != 0){
            foreach($carritoAux as $producto){
                $this->carrito[] = new Pieza($producto["refPieza"], $_connection, $producto["cantidad"]);
            }
        }
    }

    public function getNomUsser() { return $this->nomUsser; }
    public function setNomUsser($nomUsserPar) { $this->nomUsser = $nomUsserPar; }

    public function getPassUsser() { return $this->passUsser; }
    public function setPassUsser($passUsser) { $this->passUsser = $passUsser; }

    public function getConnection(){return $this->_connection;}
    public function setConnection($connection){$this->_connection = $connection;}

    public function getCarrito() { return $this->carrito; }
    public function setCarrito($carrito) { $this->carrito = $carrito; }

    public function addCarrito($piezaPar){ $this->carrito[] = $piezaPar; }

    /* MANEJO ARRAY CARRITO Y ACCESOS BD */

    // ELIMINA CARRITO
    public function borrarCarrito(){
        $_connection = new DBusser("proveedoresCarrito");
        $_connection->_delete("carrito", 'nomUsser="' . $this->getNomUsser() .'"');

        $this->setCarrito(Array());
    }
    // ACTUALIZA CANTIDADES CON LAS INTRODUCIDAS Y ARTICULOS CON CANTIDADES 0
    public function updateCarrito(){
        foreach($this->carrito as $key=>$producto){
            $cantidadUpdate = $_POST[$producto->getRefPieza()];
            if( $cantidadUpdate == 0){ unset($this->carrito[$key]); }
            else { $producto->setCantidad($cantidadUpdate); }
        }
    }
    // GUARDA CARRITO EN BD
    function guardarCarrito(){
        $_connection = new DBusser("proveedoresCarrito");
        $_querys = [];
        foreach($this->carrito as $producto) {
            $_querys[] = 'INSERT INTO carrito VALUES (' . '"' . $this->nomUsser . '"' . ',' . '"' . $producto->getRefPieza() . '"' . ',' . $producto->getCantidad() . ')';
        }
        return $_connection->_transaction($_querys);
    }
    // PROCESA CARRITO Y BORRA CARRITO
    function procesarCarrito(){
        $_connection = new DBusser("proveedoresCarrito");
        $_querys = [];
        $fechaActual = date('Y-m-d H:i:s');
        
        $_querys[0] = 'INSERT INTO pedidos(nomUsser, fecha) VALUES (' . '"' . $this->nomUsser .  '"' . ',"' . $fechaActual . '")';
        $idLinped = 0;

        foreach($this->carrito as $producto){
            $idLinped++;
            $_querys[] = 'INSERT INTO linPed VALUES(' . $idLinped . ',(SELECT numPedido FROM pedidos WHERE fecha="' . $fechaActual . '"),"' . $producto->getRefPieza()  . '",(SELECT precioVent FROM piezas WHERE refPieza="' . $producto->getRefPieza() .'"),' . $producto->getCantidad() . ')';
        }
        return $_connection->_transaction($_querys);
    }
}