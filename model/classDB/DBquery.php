<?php

include_once "DBconnection.php";

//while para leer el todo el objeto
//$conexion->query($sql)->fetch_assoc()
//fetch_array() Devuelve resultado duplicado    indice posicion y y asociativo
//fetch_row()   Devuelve resultado por posicion
//fetch_assoc() Devuelve resultado por asociativo
//fetch_object()    Devuelve un objeto con atributos

class DBquery extends DBconnection {

    public function _create($_create, $_name, $_values = ""){
        return @$this->_connection->query('CREATE '. $_create . ' ' . $_name . " " . $_values . ";");
    }

    public function _dropDB($_dropDatabase){
        return @$this->_connection->query('DROP DATABASE '. $_dropDatabase . ";");
    }

    public function _dropTable($_dropTable){
        return @$this->_connection->query('DROP TABLE '. $_dropTable . ";");
    }

    public function _truncateTable($_truncateTable){
        return @$this->_connection->query('TRUNCATE TABLE '. $_truncateTable . ";");
    }

    public function _setFK($_setFOREIGN_KEY_CHECKS = "1"){
        @$this->_connection->query('SET FOREIGN_KEY_CHECKS= '. $_setFOREIGN_KEY_CHECKS . ";");
    }

    public function _setAutocommit($autocommit = "true"){
        @$this->_connection->autocommit($autocommit);
    }


    public function _select($_select, $_from, $more = ""){
        return @$this->_connection->query('SELECT '. $_select . ' FROM ' . $_from . " " . $more . ";");
    }

    public function format_select($_ressult){
        if($_ressult != false) { return $_ressult->fetch_all(MYSQLI_ASSOC); }
    }

    public function _insert($_insertInto, $_values) {
        if(@$this->_connection->query('INSERT INTO ' . $_insertInto . ' VALUES ' . $_values . ';')){ return $this->_connection->affected_rows; }
    }

    public function _insertSelect($_insertInto, $_select, $_from, $more = "") {
        if(@$this->_connection->query('INSERT INTO ' . $_insertInto . ' SELECT ' . $_select . ' FROM ' . $_from . ' ' .$more . ';')){ return $this->_connection->affected_rows; }
    }

    public function _update($_update, $_set, $more = ""){
        if(@$this->_connection->query('UPDATE ' . $_update . ' SET ' . $_set . " " . $more . ';')){ return $this->_connection->affected_rows; }
    }

    public function _delete($_deleteFrom, $_where){
        if(@$this->_connection->query('DELETE FROM ' . $_deleteFrom . ' WHERE ' . $_where . ';')){ return $this->_connection->affected_rows; }
    }

    public function _deleteAll($_deleteFrom){
        if(@$this->_connection->query('DELETE FROM ' . $_deleteFrom . ';')){ return $this->_connection->affected_rows; }
    }

    public function _existInTable($tabla, $datos){
        $sql = "SELECT * FROM $tabla WHERE 1=1 ";
        foreach($datos as $value){
            foreach ($value as $value2){
                $sql .= 'AND' . $value2["column"] . ' =  ' . $value2["clave"];
            }
        }
        $_ressult = $this->_connection->query($sql.";");
        if(!$_ressult) { return null; }
        else if($_ressult->affected_rows > 0){ return true; }
        else { return false; }
    }

    public function _prepareLogin($loginEmail, $loginPassword = ""){
        $arrayResut = [];
        if( $loginPassword != ""){
            $_ressult = $this->_connection->prepare('SELECT * FROM usuarios WHERE nomUsser = ? AND passUsser = ?');
            $ok = $_ressult->bind_param('ss',$loginEmail, $loginPassword);
            $ok = $_ressult->execute();
        }
        else {
            $_ressult = $this->_connection->prepare('SELECT * FROM usuarios WHERE nomUsser = ?');
            $ok = $_ressult->bind_param('s',$loginEmail);
            $ok = $_ressult->execute();
        }
        if ($ok != FALSE) {
            $nomUsser = "";
            $passUsser = "";
            $ok = $_ressult->bind_result($nomUsser, $passUsser);

            while ($_ressult->fetch()) {
                $arrayResut["nomUsser"] = $nomUsser;
            }

            $_ressult->close();

            return $arrayResut;
        }
    }

    public function _prepareGetAccount($loginEmail, $loginPassword){
        $_ressult = $this->_connection->prepare('INSERT INTO usuarios  VALUES (?,?)');
        $ok = $_ressult->bind_param('ss',$loginEmail, $loginPassword);
        $ok = $_ressult->execute();
        $_ressult->close();
    }

    public function _transaction($_querys){
        $_ressultControl = true;
        $_ressults = [];
        $this->_connection->autocommit(false);
        foreach($_querys as $key=>$_query){
                $_ressults[$key] = [];
                $_ressults[$key]["query"] = $_query;
                $_ressults[$key]["ressult"] = $this->_connection->query($_query);
                $_ressults[$key]["affectedRows"] = $this->_connection->affected_rows;
                $_ressults[$key]["numError"] = $this->_connection->errno;
                $_ressults[$key]["error"] = $this->_connection->error;

                if($_ressults[$key]["ressult"] == false){ $_ressultControl = false; }
        }
        if($_ressultControl == false){ $this->_connection->rollback(); }
        else { $this->_connection->commit(); }

        $this->_connection->autocommit(true);

        return $_ressults;
    }
}