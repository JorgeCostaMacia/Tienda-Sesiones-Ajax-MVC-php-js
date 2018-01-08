<?php
    include_once "model/classApp/Usuario.php";
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

    <head> <?php include_once "views/layout/head.php"; ?></head>   <!-- HEAD -->

    <body>
        <?php include_once "controller/primaryController.php"; ?>          <!-- CONTROLADOR-->
        <?php include_once "views/layout/footer.php"; ?>            <!-- FOOTER + IMPORT JS-->
    </body>
</html>