<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="index.php?page=home" class="navbar-brand"><span class="glyphicon">&#xe021;</span> Home</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <form id="formSearch" class="navbar-form navbar-left" action="index.php?page=search" method="POST">
                <input type="hidden" name="loginEmail" id="loginEmail" value="<?=$_SESSION["usuario"]->getNomUsser();?>">
                <input type="text" id="itemSearch" class="form-control" placeholder="Search: Articulo / Pedido">
                <select name="searchType" class="form-control" id="searchType">
                    <option value="contiene">Contiene</option>
                    <option value="empieza">Empieza</option>
                    <option value="termina">Termina</option>
                </select>
                <select name="searchSelect" class="form-control" id="searchSelect">
                    <option value="" disabled="disabled" selected>Campo por el que buscar</option>
                    <optgroup label="Articulos">
                        <option value="articulos">Todos</option>
                        <option value="articulosNumero">Por referencia</option>
                        <option value="articulosPrecio">Por precio</option>
                    </optgroup>
                    <optgroup label="Pedidos">
                        <option value="pedidos">Todos</option>
                        <option value="pedidosNumPedido">Por numero</option>
                        <option value="pedidosFecha">Por fecha</option>
                    </optgroup>
                    <optgroup label="Lineas pedidos">
                        <option value="pedidosLinped">Todos</option>
                        <option value="pedidosCantidad">Por cantidad</option>
                        <option value="pedidosNumPieza">Por referencia pieza</option>
                        <option value="pedidosNomPieza">Por nombre pieza</option>
                    </optgroup>
                </select>
                <input type="hidden" name="dateInput" id="dateInput" class="form-control" value="2017-12-23">
                <div name="submitSearch" id="submitSearch"></div>
            </form>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="index.php?page=carrito"><span class="glyphicon glyphicon-shopping-cart"></span> Carrito</a></li>
            <li><a href="index.php?page=login"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
        </ul>
    </div>
</nav>
