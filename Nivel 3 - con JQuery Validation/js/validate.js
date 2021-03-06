function inicializar(){
    var formRegistro = document.getElementById("myFormId");
    var formLogin = document.getElementById("myFormId2");
    var formBuscar = document.getElementById("mySearch");
    
    //Cuando quitamos el foco quitar clase is-invalid
    formRegistro.addEventListener("blur", (event) => {
        console.log(event);
        if(event.target.value!="") event.target.classList.remove("is-invalid");
    }, true);
    
    
    formLogin.addEventListener("blur", (event) => {
        console.log(event);
        if(event.target.value!="") event.target.classList.remove("is-invalid");
    }, true);
    
    formBuscar.addEventListener("blur", (event) => {
        console.log(event);
        if(event.target.value!="") event.target.classList.remove("is-invalid");
    }, true);
}

//Validación input usuario en login
function inputUserLogin() {

    var correo = document.forms["myForm2"]["email2"];
    correo.classList.remove("is-invalid");

    if (correo.value == "") {
        correo.classList.add("is-invalid");
        document.getElementById("errorCorreoLogin").textContent = "Debes introducir un correo electrónico.";
        return false;
    } else if (!validarCorreo(correo.value)) {
        correo.classList.add("is-invalid");
        document.getElementById("errorCorreoLogin").textContent = "Por favor, introduce un correo válido.";
        return false;
    }
    return true;
}

//Validación input contraseña en login
function inputContraLogin() {

    var contra = document.forms["myForm2"]["pwdL"];
    contra.classList.remove("is-invalid");

    if (contra.value == "") {
        contra.classList.add("is-invalid");
        document.getElementById("errorContraLogin").textContent = "Debes introducir una contraseña.";
        return false;
    }
    return true;
}

//Función validación login
function validacionLogin() {
    var respuestaUserLogin = inputUserLogin();
    var respuestaContraLogin = inputContraLogin();

    if (respuestaUserLogin && respuestaContraLogin) {
        return true;
    } else {
        return false;
    }
    
}

//Función validación buscador
function validacionBusqueda() {

    var errores = 0;
    document.getElementById("busqueda").classList.remove("is-invalid");

    var buscar = document.forms["mySearch"]["busqueda"];

    if (buscar.value == "") {
        buscar.classList.add("is-invalid");
        document.getElementById("errorBusqueda").textContent = "Debes introducir una búsqueda.";
        errores++;
    } else if (buscar.value.length <= 3) {
        buscar.classList.add("is-invalid");
        document.getElementById("errorBusqueda").textContent = "La búsqueda debe tener más de 3 caracteres";
        errores++;
    }

    if (errores > 0) {
        return false;
    } else {
        return true;
    }
}


//Función validación correo electrónico
function validarCorreo(correo) {
    var comprobarCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (comprobarCorreo.test(correo)) {
        return true;
    } else {
        return false;
    }
}

//Función validación contraseña (mínimo una mayúscula, mínimo un número, mínimo 8 caracteres)
function validarPassword(password) {
    var comprobarContra = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\.\_\-]{8,}$/

    if (comprobarContra.test(password)) {
        return true;
    } else {
        return false;
    }
}

//Limpiar datos de registro cuando se vuelva hacer click en "Regístrate"
function limpiarRegistro() {
    document.forms["myForm"]["user"].value = "";
    document.forms["myForm"]["provincia"].value = "";
    document.forms["myForm"]["email"].value = "";
    document.forms["myForm"]["pwd"].value = "";
    document.forms["myForm"]["pwd2"].value = "";
    document.forms["myForm"]["gridCheck"].value = "";
}

//Limpiar datos de login cuando se vuelva hacer click en "Log in"
function limpiarLogin() {
    document.forms["myForm2"]["email2"].classList.remove("is-invalid");
    document.forms["myForm2"]["pwdL"].classList.remove("is-invalid");
    document.forms["myForm2"]["email2"].value = "";
    document.forms["myForm2"]["pwdL"].value = "";
}

//Limpiar invalid buscador
function limpiarBuscar() {
    document.getElementById("busqueda").classList.remove("is-invalid");
}