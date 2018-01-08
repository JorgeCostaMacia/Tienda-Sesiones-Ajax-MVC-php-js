/********** CAMBIA COLORES ICONOS LOGIN ******************/
function badMailLogin(){ document.getElementById("resultEmailLogin").style.color="#f00"; }
function badPassLogin(){ document.getElementById("resultPassLogin").style.color="#f00"; }
function okMailLogin(){ document.getElementById("resultEmailLogin").style.color="#555"; }
function okPassLogin(){ document.getElementById("resultPassLogin").style.color="#555"; }

/********** MENSAJE LOGIN NO EXIST USUARIO ******************/
function msjNoExistUsser(){
    let mensajesLogin = document.getElementById("mensajesLogin");

    if(mensajesLogin.innerHTML == ""){
        let mssjNode = document.createElement('div');
        mssjNode.setAttribute('class', 'alert alert-danger');
        mssjNode.setAttribute('id', 'alert alert-danger');
        let strongNode = document.createElement('strong');
        let strongText = document.createTextNode("No existe el usuario o la contraseña es erronea");
        strongNode.appendChild(strongText);

        mssjNode.appendChild(strongNode);
        mensajesLogin.appendChild(mssjNode);
    }
}

/********** MENSAJE LOGIN EXIST USUARIO ******************/
function msjExistUsser(){
    let mensajesLogin = document.getElementById("mensajesLogin");
    if(mensajesLogin.innerHTML == ""){
        let mssjNode = document.createElement('div');
        mssjNode.setAttribute('class', 'alert alert-danger');
        mssjNode.setAttribute('id', 'alert alert-danger');
        let strongNode = document.createElement('strong');
        let strongText = document.createTextNode("No puede registrarse, existe el usuario");
        strongNode.appendChild(strongText);

        mssjNode.appendChild(strongNode);
        mensajesLogin.appendChild(mssjNode);
    }
}

/********** MENSAJE ERRORES BUSQUEDA ******************/
function msjErrorSearch(msjText){
    let msjSearchError = document.getElementById("msjSearchEvents");
    msjSearchError.innerHTML = "";
    let mssjNode = document.createElement('div');
    mssjNode.setAttribute('class', 'alert alert-danger');
    mssjNode.setAttribute('id', 'alert alert-danger');
    let strongNode = document.createElement('strong');
    let strongText = document.createTextNode(msjText);
    strongNode.appendChild(strongText);

    mssjNode.appendChild(strongNode);
    msjSearchError.appendChild(mssjNode);
}

/********** MENSAJE OK BUSQUEDA ******************/
function msjSuccesSearch(msjText){
    let msjSearchError = document.getElementById("msjSearchEvents");
    msjSearchError.innerHTML = "";
    let mssjNode = document.createElement('div');
    mssjNode.setAttribute('class', 'alert alert-success');
    mssjNode.setAttribute('id', 'alert alert-success');
    let strongNode = document.createElement('strong');
    let strongText = document.createTextNode(msjText);
    strongNode.appendChild(strongText);

    mssjNode.appendChild(strongNode);
    msjSearchError.appendChild(mssjNode);
}