"use strict";

// CREA PETICION - LLAMA PHP - CUANDO RECIBE RESPUESTA MONTA FUNCION Y LA LLAMA
// URL: PAGINA A LA QUE LLAMA
// PARAMETER: VARIABLES Y SUS VALORES (COMO GET IMPLICITO)
function ajaxQuery(url, parameter, nameResultFunction, method, usarxml) {
    let  query = newQuery();
    query.onreadystatechange  = function() {
        if(query.readyState == 4) {
            if(query.status == 200) {
                let queryRessult = query.responseText;
                if(usarxml ==1)  { queryRessult = query.responseXML; }
                eval(nameResultFunction  + '(queryRessult)');
            }
        }
    }
    if(trim (method.toUpperCase())=='POST' )  { requestPOST(url,parameter,query); }
    else { requestGET(url,parameter,query); }
}

function newQuery() {
    let query = "";
    try { query = new XMLHttpRequest(); } /* e.j. Firefox */
    catch(err1) {
        try { query = new ActiveXObject("Msxml2.XMLHTTP"); } /*  some versions IE */
        catch(err2) {
            try { query = new ActiveXObject("Microsoft.XMLHTTP"); } /* some versions IE */
            catch(err3) { query =  false; }
        }
    }
    return query;
}

function requestGET(url, parameter, query) {
    let myRand = parseInt(Math.random()*99999999);
    query.open("GET",url+'?'+parameter+'&rand='+myRand,true);
    query.send(null);
}

function requestPOST(url, parameter, query) {
    query.open("POST", url,true);
    query.setRequestHeader('Content-Type',  'application/x-www-form-urlencoded');
    query.send(parameter);
}

function trim (myString){ return myString.replace(/^\s+/g,'').replace(/\s+$/g,'') }