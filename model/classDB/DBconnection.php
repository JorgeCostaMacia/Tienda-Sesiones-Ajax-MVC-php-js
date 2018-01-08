<?php

class DBconnection {

    private static $_instance;

    protected function getConnection($_database, $_host = "localhost", $_username = "root", $_password = "root") {
        if(!self::$_instance) {
            @self::$_instance =  new mysqli($_host, $_username, $_password, $_database);
            DBconnection::checkConnection(@self::$_instance);
        }
        return self::$_instance;
    }

    public function checkConnection($_connection){
        if($_connection->connect_errno){
            echo "Error numero: " . $_connection->connect_errno . "<br>";
            echo "Error: " . $_connection->connect_error . "<br>";
            exit();
        }
    }

    public function disconnect(){ $this->_connection->close(); }
}