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