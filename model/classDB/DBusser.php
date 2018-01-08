<?php

include_once "DBquery.php";

class DBusser extends DBquery {
    public $_connection;
    private $_host;
    private $_username;
    private $_password;
    private $_database;

    function __construct($_database, $_host = "localhost", $_username = "root", $_password = "") {
        $this->_host = $_host;
        $this->_username = $_username;
        $this->_password = $_password;
        $this->_database = $_database;
        $this->_connection = DBconnection::getConnection($_database);
    }

    public function setConnection($connection) { $this->_connection = $connection; }

    public function getHost() { return $this->_host; }
    public function setHost($host) { $this->_host = $host; }

    public function getUsername() { return $this->_username; }
    public function setUsername($username) { $this->_username = $username; }

    public function getPassword() { return $this->_password; }
    public function setPassword($password) { $this->_password = $password; }

    public function getDatabase() { return $this->_database; }
    public function setDatabase($database) { $this->_database = $database; }

    public function get_connection() { return $this->_connection; }
    public function set_connection($_connection) { $this->_connection = $_connection; }
}