window.onload = function() {
    document.getElementById('dni').addEventListener("focusout", dni_validacion);
    document.getElementById('nombre').addEventListener("focusout", nombre);
    document.getElementById('papellido').addEventListener("focusout", papellido);
    document.getElementById('sapellido').addEventListener("focusout", sapellido);
    document.getElementById('email').addEventListener("focusout", email);
    document.getElementById('fecha_nac').addEventListener("focusout", fecha_nac);
    document.getElementById("sexo").addEventListener("focusout", sexo);
}

function sexo() {
    if (document.getElementById('sexo').value == "Escoge tu sexo") {
        document.getElementById('sexo').style.backgroundColor = "red";
    } else {
        document.getElementById('sexo').style.backgroundColor = "green";
    }
}

function fecha_nac() {
    if (document.getElementById('fecha_nac').value == "") {
        document.getElementById('fecha_nac').style.backgroundColor = "red";
    } else {
        var fecha = document.getElementById('fecha_nac').value;
        fecha = new Date(fecha);
        let date = new Date()
        var diff_años = ((date - fecha) / 86400000) / 365;
        var edad = Math.trunc(diff_años);
        document.getElementById('fecha_nac').style.backgroundColor = "green";
        if (edad < 0) {
            document.getElementById('cat_mensaje').innerHTML = 'Aun no existes, introduce una fecha valida';
        } else if (edad <= 6) {
            document.getElementById('cat_mensaje').innerHTML = 'Perteneces a la categoria de Bebes';
        } else if (edad <= 12) {
            document.getElementById('cat_mensaje').innerHTML = 'Perteneces a la categoria de Infantil';
        } else if (edad <= 18) {
            document.getElementById('cat_mensaje').innerHTML = 'Perteneces a la categoria de Junior';
        } else if (edad <= 30) {
            document.getElementById('cat_mensaje').innerHTML = 'Perteneces a la categoria de Promesa';
        } else if (edad <= 45) {
            document.getElementById('cat_mensaje').innerHTML = 'Perteneces a la categoria de Senior';
        } else if (edad <= 60) {
            document.getElementById('cat_mensaje').innerHTML = 'Perteneces a la categoria de Veteranos';
        } else if (edad <= 999) {
            document.getElementById('cat_mensaje').innerHTML = 'Perteneces a la categoria Master';
        }



    }
}

function nombre() {
    if (document.getElementById('nombre').value == "") {
        document.getElementById('nombre').style.backgroundColor = "red";
    } else {
        document.getElementById('nombre').style.backgroundColor = "green";
    }
}

function papellido() {
    if (document.getElementById('papellido').value == "") {
        document.getElementById('papellido').style.backgroundColor = "red";
    } else {
        document.getElementById('papellido').style.backgroundColor = "green";
    }
}

function sapellido() {
    if (document.getElementById('sapellido').value == "") {
        document.getElementById('sapellido').style.backgroundColor = "red";
    } else {
        document.getElementById('sapellido').style.backgroundColor = "green";
    }
}

function email() {
    if (document.getElementById('email').value == "") {
        document.getElementById('email').style.backgroundColor = "red";
    } else {
        document.getElementById('email').style.backgroundColor = "green";
    }
}

function dni_validacion() {
    if (document.getElementById('dni').value == "") {
        document.getElementById("dni").style.backgroundColor = "red";
    } else if (document.getElementById("dni").value.length != "") {
        var numero
        var letr
        var letra
        var expresion_regular_dni
        var dni = document.getElementById('dni').value;
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
        if (expresion_regular_dni.test(dni) == true) {
            numero = dni.substr(0, dni.length - 1);
            letr = dni.substr(dni.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != letr.toUpperCase()) {
                document.getElementById("dni_mensaje").innerHTML = '<p style="Background-Color:red; border-radius: 2px; padding: 4px; margin-right: 20px; text-align: center; width:100%;">La letra del DNI introducida no es valida</p>'; // el innerHTML hace que en el campo que indicamos se mostrara el mensaje
                document.getElementById("dni").style.backgroundColor = "red";
            } else {
                document.getElementById("dni").style.backgroundColor = "green";
                document.getElementById("dni_mensaje").innerHTML = '';
            }
        } else {
            document.getElementById("dni_mensaje").innerHTML = '<p style="Background-Color:red; border-radius: 2px; padding: 4px; margin-right: 20px; text-align: center; width:100%;">DNI erroneo, formato no valido</p>'; // el innerHTML hace que en el campo que indicamos se mostrara el mensaje
            document.getElementById("dni").style.backgroundColor = "red";
        }
    }

}

function validacionForm(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("nombre").value;
    var papellido = document.getElementById("papellido").value;
    var sapellido = document.getElementById("sapellido").value;
    var fecha_nac = document.getElementById("fecha_nac").value;
    var email = document.getElementById("email").value;
    var sexo = document.getElementById("sexo").value;







    if (dni == "" || nombre == "" || papellido == "" || sapellido == "" || email == "" || fecha_nac == "" || sexo == "Escoge tu sexo") { // si el email o la contraseña estan vacios...
        document.getElementById("message").innerHTML = '<p style="Background-Color:red; border-radius: 4px; padding: 8px; margin-right: 20px; text-align: center; width:100%;">Alguno de los campos esta vacio</p>'; // el innerHTML hace que en el campo que indicamos se mostrara el mensaje
        // if (dni == "") {
        //     dni.style.borderColor = 'red';
        // }
        return false;
    } else {
        if (expresion_regular_dni.test(dni) == true) {
            numero = dni.substr(0, dni.length - 1);
            letr = dni.substr(dni.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != letr.toUpperCase()) {
                document.getElementById("message").innerHTML = '<p style="Background-Color:red; border-radius: 4px; padding: 8px; margin-right: 20px; text-align: center; width:100%;">La letra del DNI introducida no es valida</p>'; // el innerHTML hace que en el campo que indicamos se mostrara el mensaje
                return false;
            } else {
                //alert('Dni correcto');
                return true;
            }
        } else {
            document.getElementById("message").innerHTML = '<p style="Background-Color:red; border-radius: 4px; padding: 8px; margin-right: 20px; text-align: center; width:100%;">DNI erroneo, formato no valido</p>'; // el innerHTML hace que en el campo que indicamos se mostrara el mensaje
            //alert('Dni erroneo, formato no válido');
            return false;
        }
    }


}



function validacionDani(dni) {
    var inputs = document.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' && inputs[i].value == '') {
            inputs[i].style.borderColor = 'red';
            document.getElementById("message").innerHTML = '<p style="Background-Color:red; border-radius: 4px; padding: 8px; margin-right: 20px; text-align: center; width:100%;">Alguno de los campos esta vacio</p>';
            var count = 1;
        } else {
            inputs[i].style.borderColor = 'grey';
        }
    }
    if (count == 1) {
        return false;
    } else {
        var numero
        var letr
        var letra
        var expresion_regular_dni
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
        if (expresion_regular_dni.test(dni) == true) {
            alert('payaso');
            numero = dni.substr(0, dni.length - 1);
            letr = dni.substr(dni.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != letr.toUpperCase()) {
                document.getElementById("message").innerHTML = '<p style="Background-Color:red; border-radius: 4px; padding: 8px; margin-right: 75%;">Dni erroneo, la letra del NIF no se corresponde</p>'; // el innerHTML hace que en el campo que indicamos se mostrara el mensaje
                return false;
            } else {
                //alert('Dni correcto');
                return true;
            }
        } else {
            document.getElementById("message").innerHTML = '<p style="Background-Color:red; border-radius: 4px; padding: 8px; margin-right: 75%;">Dni erroneo, formato no válido</p>'; // el innerHTML hace que en el campo que indicamos se mostrara el mensaje
            //alert('Dni erroneo, formato no válido');
            return false;
        }
    }

}