<div class="container">
    <form id="formLoginGetAccount" action="index.php?page=home" method="POST" class="col-md-4 col-md-offset-4 panel panel-default">
        <div class="panel-body">
            <h3 class="text-center">Login</h3>
            <div class="input-group input-group-lg">
                <span class="input-group-addon " id="resultEmailLogin"><i class="fa fa-user" aria-hidden="true">
                        <span class="glyphicon glyphicon-user"></span>
                    </i></span>
                <input type="email"  name="loginEmail" id="loginEmail" class="form-control" placeholder="Email" aria-describedby="sizing-addon1" value="" required>
                <span id="resultLoginEmail"></span>
            </div>
            <br>
            <div class="input-group input-group-lg">
                <span class="input-group-addon" id="resultPassLogin"><i class="fa fa-key" aria-hidden="true">
                    <span class="glyphicon glyphicon-lock"></span>
                </i></span>
                <input type="password" name="loginPassword" id="loginPassword" class="form-control" placeholder="Password" required>
            </div>
            <br>
            <button type="button" name="submitLogin" id="submitLogin" class="btn btn-primary btn-block">Login</button>
            <button type="button" name="submitGetAccount" id="submitGetAccount" class="btn btn-primary btn-block">Get account</button>
        </div>
    </form>
</div>

<div id="mensajesLogin"></div>