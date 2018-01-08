<form id="carritoForm" name="carritoForm" action="index.php?page=carrito" method="POST">
    <div class="container">
        <h2>Carrito</h2>
        <table class="table table-hover">
            <thead>
            <tr>
                <th>Imagen</th>
                <th>Ref articulo</th>
                <th>Nombre articulo</th>
                <th>Precio €</th>
                <th>Cantidad</th>
                <th>Precio total €</th>
            </tr>
            </thead>
            <tbody>
            <?php
                $total = 0;
                foreach($_SESSION["usuario"]->getCarrito() as $producto){
                    echo '<tr>';
                        echo '<td><img src="' . $producto->getRutaImagen() . '"></td>';
                        echo '<td>' . $producto->getRefPieza() . '</td>';
                        echo '<td>' . $producto->getNomPieza() . '</td>';
                        echo '<td><input id="precio' . $producto->getRefPieza() .'" name="precio' . $producto->getRefPieza() .'" type="hidden" value="' . $producto->getPrecioVent() . '">' . $producto->getPrecioVent() . '</td>';
                        echo '<td><input class="form-control" id="' . $producto->getRefPieza() .'" name="' . $producto->getRefPieza() .'" type="number" min="0" value="' . $producto->getCantidad() . '"></td>';
                        echo '<td><input class="form-control" id="total' . $producto->getRefPieza() .'" name="total' . $producto->getRefPieza() .'" type="text" value="' . $producto->getCantidad() * $producto->getPrecioVent() . '" readonly></td>';
                    echo '</tr>';
                    $total += $producto->getCantidad() * $producto->getPrecioVent();
                }
                    echo '<tr>';
                        echo '<td></td>';
                        echo '<td></td>';
                        echo '<td></td>';
                        echo '<td></td>';
                        echo '<td></td>';
                        echo '<td>TOTAL: <input type="text" name="totalCarrito" id="totalCarrito" value="' . $total . '" readonly></td>';
                    echo '</tr>';
                if(count($_SESSION["usuario"]->getCarrito()) != 0){ include_once "views/assets/submitCarrito.php"; }
            ?>
            </tbody>
        </table>
    </div>
</form>