//valido la edad. tiene que ser entero mayor que 18
var edad = document.getElementById("dato_edad_usuario").value;
//var edad = document.form_nuevo_usuario.dato_edad_usuario.value;
console.log(edad);
/*edad = validarEntero(edad)
document.form_nuevo_usuario.dato_edad_usuario.value=edad
    if (edad==""){
        alert("Tiene que introducir un número entero en su edad.")
        document.form_nuevo_usuario.dato_edad_usuario.focus()
        return 0;
        }
        else{
            if (edad<18){
                alert("Debe ser mayor de 18 años.")
                document.form_nuevo_usuario.dato_edad_usuario.focus()
                return 0;
                }
        }*/

function validarEntero(valor) {
    valor = parseInt(valor);
    if (isNaN(valor)) {
        console.log("Campo vacio o no numerico");
        return "";
    }
        else {
            console.log("Campo numerico", +valor);
            return valor;
        }
}

function validaEdad() {
    enteroValidado = validarEntero(edad)
    if (enteroValidado == ""){
        alert("Debe Escribir un numero entero");
        document.form_nuevo_usuario.dato_edad_usuario.clear;
        document.form_nuevo_usuario.dato_edad_usuario.select();
        //document.form_nuevo_usuario.dato_edad_usuario.focus();
    }
        else {
            document.form_nuevo_usuario.dato_edad_usuario.value = enteroValidado
        }
}

function validar_nombre_usuario(string){

}

function validar_edad_usuario(edad){

}

function validar_contasena(string){

}
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contasena = validar_contasena;