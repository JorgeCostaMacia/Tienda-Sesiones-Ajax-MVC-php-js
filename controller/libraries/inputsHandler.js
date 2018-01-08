"use strict";

// ** EVALUA FORM LOGIN NOMUSSER **
//      RECOGE VALORES: NOMUSSER
//      EVALUA SEA EMAIL - RETURN EVAL
function validateMailLogin(loginEmailObject) {
	let loginEmail = loginEmailObject.value;
	let resultLoginEmail = false;

	let aux = loginEmail.split("@");
	if(aux.length == 2){ 
		if(esTexto(aux[0])){ 
			let aux2 = aux[1].split(".");
			if(aux2.length == 2){ 
				if(esTexto(aux2[0]) && esTexto(aux2[1])){
					resultLoginEmail = true;
				}
			}
		}
	}
	return resultLoginEmail;
}

// ** EVALUA FORM LOGIN PASS **
//      RECOGE VALORES: PASS
//      EVALUA SEA PASS - RETURN EVAL
function validatePassLogin(loginPasswordObject) {
	let loginPassword = loginPasswordObject.value;
	if(esTexto(loginPassword) && loginPassword.length >= 8 ) { return true; }
	else { return false; }	
}

// ** EVALUA FORM LOGIN NOMUSSER PASS **
//      RECOGE VALORES: PASS
//      EVALUA SEA TEXTO - RETURN EVAL
function esTexto(dato){
    let controlLetra = true;
    if(dato != "" && dato != null){
        for(let i = 0; i < dato.length; i++){
            if(!esLetra(dato[i])){ controlLetra = false; i = dato.length; }
        }
    } else { controlLetra = false; }
    return controlLetra;
}

// ** EVALUA FORM LOGIN NOMUSSER PASS **
//      RECOGE VALORES: PASS
//      EVALUA SEA TEXTO - RETURN EVAL
function esLetra(dato){
    if((dato.charCodeAt() > 64  && dato.charCodeAt() < 91) || dato.charCodeAt() == 165 || dato.charCodeAt() == 164 ||
        (dato.charCodeAt() > 96  && dato.charCodeAt() < 123)){ return true; }
    else { return false;}
}