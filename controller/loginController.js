"use strict";

// ** LOGIN **
//      RECOGE DATOS FORM LOGIN
//      EVALUA FORMATO DATOS
//      GENERA PARAMETROS - LLAMA BD PARA LOGIN
//      SI FALLA MUESTRA ADVERTENCIAS
function evalformLogin(){
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let resultLoginEmail = false;
    let resultLoginPassword = false;

    if(validateMailLogin(loginEmail)){
        resultLoginEmail = true;
        okMailLogin();
    }
    else { badMailLogin(); }

    if(validatePassLogin(loginPassword)) {
        resultLoginPassword = true;
        okPassLogin();
    }
    else { badPassLogin(); }

    if(resultLoginEmail && resultLoginPassword){
        let parametros = "action=checkUsser" + "&loginEmail=" + loginEmail.value + '&loginPassword=' + loginPassword.value;
        ajaxQuery('model/ajaxModel.php',parametros,'checkExistLogin','POST',0);
    }
}

// ** GET ACOUNT **
//      RECOGE DATOS FORM LOGIN
//      EVALUA FORMATO DATOS
//      GENERA PARAMETROS - LLAMA BD PARA REGISTRO Y LOGIN
//      SI FALLA MUESTRA ADVERTENCIAS
function evalformGetAccount(){
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let resultLoginEmail = false;
    let resultLoginPassword = false;

    if(validateMailLogin(loginEmail)){
        resultLoginEmail = true;
        okMailLogin();
    }
    else { badMailLogin(); }
    if(validatePassLogin(loginPassword)) {
        resultLoginPassword = true;
        okPassLogin();
    }
    else { badPassLogin(); }

    if(resultLoginEmail && resultLoginPassword){
        let parametros = "action=newUsser" + "&loginEmail=" + loginEmail.value + '&loginPassword=' + loginPassword.value;
        ajaxQuery('model/ajaxModel.php',parametros,'checkExistLogin','POST',0);
    }
}

// ** RETURN AJAX QUERY LOGIN **
//      RECOGE CONSULTA BD
//      EVALUA INDEX
//      EVALUA RESSULT LOGIN - LOGEA
//      EVALUA RESSULT GET ACOUNT - REGISTRA - LOGEA
//      SI FALLA MUESTRA ADVERTENCIAS
function checkExistLogin(resultado){
    let ressult = JSON.parse(resultado);

    if(ressult["index"] == "checkUsser"){
        if(ressult["ressult"] == "exist"){ formLoginGetAccount.submit(); }
        else { msjNoExistUsser(); }
    }
    else if(ressult["index"] = "newUsser"){
        if(ressult["ressult"] == "noExist"){ formLoginGetAccount.submit(); }
        else { msjExistUsser(); }
    }
}