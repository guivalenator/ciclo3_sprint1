function validar_nombre_usuario(string) {
var dato_nombre_usuario;
dato_nombre_usuario=document.getElementById(dato_nombre_usuario).value;

expresion2=/^([0-9])*$/

if (expresion2.test(dato_nombre_usuario)){
    alert("El nombre solo debe contener letras");
}

else if(/^[a-z]/.test(dato_nombre_usuario)){
    alert("Debe iniciar con mayuscula")
}

else if (/^\s/.test(dato_nombre_usuario)){
    alert("No debe existir un espacio en blanco al comienzo")
}
}
function validar_edad_usuario(edad) {
    var dato_edad_usuario;
    dato_edad_usuario=document.getElementById(dato_edad_usuario).value;

    if (isNaN(dato_edad_usuario)){
        alert("La edad ingresada no es un nùmero");
    }

    else if (dato_edad_usuario<0) {
       alert("La edad ingresada debe ser mayor a cero");
    }
    
    else if(dato_edad_usuario<13 && (dato_edad_usuario>110)){;
    alert("La edad ingresada es incorrecta");
    }
    }

function validar_contrasena(string){
    var dato_contraseña;
    expresion=/[A-Za-z0-9]/;
    dato_contraseña=document.getElementById(dato_contraseña).value;

        if (dato_contraseña.lenght!=6){
            alert("La contraseña debe tener 5 caracteres");
        }

        else if(!expresion.test(dato_contraseña)){
            alert("Solo debe contener caracteres alfanùmericos");
        }
        }

module.exports.validar_nombre_usuario= validar_nombre_usuario;
module.exports.validar_edad_usuario=validar_edad_usuario;
module.exports.validar_contrasena=validar_contrasena;
