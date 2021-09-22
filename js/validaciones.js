function validaEdad() {
    var edad = document.getElementById("dato_edad_usuario").value;
    var enteroValidado = validar_edad_usuario(edad);
}

function validar_nombre_usuario(string){

}

function validar_edad_usuario(edad){
    var valor = parseInt(edad);
    console.log(valor);
    if(isNaN(valor)== true){
        console.log(valor);
        alert("Por el if -->> No se puede convertir");
    }
    else{
        console.log(valor);
        alert("Por el else")
    }

}

function validar_contasena(string){

}
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contasena = validar_contasena;