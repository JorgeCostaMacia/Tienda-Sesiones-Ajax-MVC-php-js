<?php

class Pieza {
    private $refPieza;      // LO SACO DE CARRITO
    private $nomPieza;      // LO SACO DE PIEZA
    private $cantidad;      // LO SACO DE CARRITO
    private $precioVent;    // LO SACO DE PIEZA
    private $ruta_imagen;   // LO SACO DE PIEZA

    // CREA OBJETO CON SUS DATOS EN BD O SESION
    public function __construct($refPieza, $_connection, $cantidad = 0){
        if($_connection == ""){ $_connection = new DBusser("proveedoresCarrito"); }

        $pieza = $_connection->format_select($_connection->_select('*', 'piezas', 'WHERE refPieza="' . $refPieza . '"'));

        $this->refPieza = $pieza[0]["refPieza"];
        $this->nomPieza = $pieza[0]["nomPieza"];
        $this->cantidad = $cantidad;
        $this->precioVent = $pieza[0]["precioVent"];
        $this->ruta_imagen = $pieza[0]["ruta_imagen"];
    }

    public function getRefPieza(){return $this->refPieza;}
    public function setRefPieza($refPiezaPar){$this->refPieza = $refPiezaPar;}

    public function getNomPieza(){return $this->nomPieza;}
    public function setNomPieza($nomPiezaPar){$this->nomPieza = $nomPiezaPar;}

    public function getCantidad(){return $this->cantidad;}
    public function setCantidad($cantidadPar){$this->cantidad = $cantidadPar;}

    public function getPrecioVent(){return $this->precioVent;}
    public function setPrecioVent($precioVentPar){$this->precioVent = $precioVentPar;}

    public function getRutaImagen(){return $this->ruta_imagen;}
    public function setRutaImagen($ruta_imagenPar) {$this->ruta_imagen = $ruta_imagenPar;}
}