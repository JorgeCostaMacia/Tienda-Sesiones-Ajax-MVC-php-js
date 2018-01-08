<?php
function msjSuccBorradoCarrito(){
    echo '<div class="alert alert-success"><strong>Se ha borrado el carrito correctamte</strong></div>';
}

function msjSuccActualizadoCarrito(){
    echo '<div class="alert alert-success"><strong>Se ha actualizado el carrito correctamte</strong> Cantidades = 0</div>';
}

function msjSuccGuardadoCarrito(){
    echo '<div class="alert alert-success"><strong>Se ha guardado el carrito correctamte</strong></div>';
}

function msjDangerGuardadoCarrito($error){
    echo '<div class="alert alert-danger"><strong>No se ha podido guardar carrito</strong><br>Errores:<br>' . $error . '</div>';
}

function msjSuccProcesadoCarrito(){
    echo '<div class="alert alert-success"><strong>Se ha procesado el carrito correctamte</strong></div>';
}

function msjDangerProcesadoCarrito($error){
    echo '<div class="alert alert-danger"><strong>No se ha podido procesar el carrito</strong><br>Errores:<br> ' . $error . '</div>';
}