//Validación input usuario
function inputUser() {
    
    var usuario = document.forms["myForm"]["user"];
    usuario.classList.remove("is-invalid");

    if (usuario.value == "") {
        usuario.classList.add("is-invalid");
        document.getElementById("errorUsuario").textContent = "Debes introducir un nombre de usuario.";
        return false;
    }
    return true;
}

//Validación select provincia
function inputProvincia() {

    var provincia = document.forms["myForm"]["provincia"];
    provincia.classList.remove("is-invalid");

    if (provincia.value == "") {
        provincia.classList.add("is-invalid");
        document.getElementById("errorProvincia").textContent = "Debes seleccionar una provincia.";
        return false;
    }
    return true;
}

//Validación input correo electrónico
function inputCorreo() {
    
    var correo = document.forms["myForm"]["email"];
    correo.classList.remove("is-invalid");

    if (correo.value == "") {
        correo.classList.add("is-invalid");
        document.getElementById("errorCorreo").textContent = "Debes introducir un correo electrónico.";
        return false;
    } else if (!validarCorreo(correo.value)) {
        correo.classList.add("is-invalid");
        document.getElementById("errorCorreo").textContent = "Por favor, introduce un correo válido.";
        return false;
    }
    return true;
}

//Validación input contraseña
function inputContra() {

    var contra = document.forms["myForm"]["pwd"];
    contra.classList.remove("is-invalid");

    if (contra.value == "") {
        contra.classList.add("is-invalid");
        document.getElementById("errorContra").textContent = "Debes introducir una contraseña.";
        return false;
    } else if (!validarPassword(contra.value)) {
        contra.classList.add("is-invalid");
        document.getElementById("errorContra").textContent = "Formato no válido. Debe contener al menos 8 caracteres, una mayúscula y un número";
        return false;
    }
    return true;
}

//Validación input confirmación de contraseña
function inputContra2() {

    var contra = document.forms["myForm"]["pwd"];
    var contra2 = document.forms["myForm"]["pwd2"];
    contra2.classList.remove("is-invalid");

    if (contra2.value == "") {
        contra2.classList.add("is-invalid");
        document.getElementById("errorContra2").textContent = "Debes introducir la confirmación de contraseña.";
        return false;
    } else if (contra.value != contra2.value) {
        contra2.classList.add("is-invalid");
        document.getElementById("errorContra2").textContent = "Las contraseñas deben coincidir.";
        return false;
    }
    return true;
}

//Validación check condiciones
function aceptarCond() {

    var privacidad = document.forms["myForm"]["gridCheck"];
    privacidad.classList.remove("is-invalid");

    if (!privacidad.checked) {
        privacidad.classList.add("is-invalid");
        document.getElementById("errorCheck").textContent = "Debes aceptar las condiciones.";
        return false;
    }
    return true;
}


//Función validación registro
function validacionRegistro() {
    var respuestaUser = inputUser();
    var respuestaProvincia = inputProvincia();
    var respuestaCorreo = inputCorreo();
    var respuestaContra = inputContra();
    var respuestaContra2 = inputContra2();
    var respuestaCond = aceptarCond();

    if (respuestaUser && respuestaProvincia && respuestaCorreo && respuestaContra && respuestaContra2 && respuestaCond) {
        return true;
    } else {
        return false;
    }
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
    document.forms["myForm"]["user"].classList.remove("is-invalid");
    document.forms["myForm"]["provincia"].classList.remove("is-invalid");
    document.forms["myForm"]["email"].classList.remove("is-invalid");
    document.forms["myForm"]["pwd"].classList.remove("is-invalid");
    document.forms["myForm"]["pwd2"].classList.remove("is-invalid");
    document.forms["myForm"]["gridCheck"].classList.remove("is-invalid");
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