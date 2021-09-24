function validaEdad() {
    var edad = document.getElementById("dato_edad_usuario").value;
    var enteroValidado = validar_edad_usuario(edad);
<<<<<<< HEAD
}

function validaNombre() {
    var nombre = document.getElementById("dato_nombre_usuario").value;
    // nombreValidado = validar_nombre_usuario(nombre);
    var nombreValidado = validar_nombre_usuario(nombre);
=======
>>>>>>> ad56b49c6bc82e1565a32c2fcbacbc88f0e67c4f
}

function validar_nombre_usuario(valor){
    console.log(valor);
    var dato_a_comprobar = valor;
    var valoresNoAceptados = /^[0-9\s]+$/;
    var valoresAceptados = /^[a-zA-Z0-9\s]+$/;
    var numero_caracteres= valor.length;
    console.log(valor[valor.length-1])
    console.log(numero_caracteres);
    if (valor[0].match(valoresNoAceptados) || valor[valor.length-1]==" ") {
        alert("Nombre de usuario no debe iniciar con un número")
        return false;
    }
    else if(dato_a_comprobar.match(valoresAceptados) && dato_a_comprobar[0].match(/^[A-Z]+$/ )){
        for(var i=0; dato_a_comprobar.length-1;i++){
            if(dato_a_comprobar[i]==" "){
                console.log("Encontro un espacio")
                console.log(dato_a_comprobar[i+1]);
                if (dato_a_comprobar[i+1].match(/^[A-Z]+$/));
                    alert("Correcto")
            }
        } 
    }
    else{
        alert("Las letras iniciales deben ser en mayusculas")
    }

}

function validar_edad_usuario(edad){
    var valor = parseInt(edad);
    console.log(valor);
    if(isNaN(valor)== true){
        console.log(valor);
<<<<<<< HEAD
        alert("El dato ingresado debe ser numerico");
    }
    else if(valor >=13 && valor <110){
        console.log(valor);
        alert("Cumple con los parametros de edad")
    }
    else{
        alert("La edad  debe estar entre 13 y 109 años")
=======
        alert("Por el if -->> No se puede convertir");
    }
    else{
        console.log(valor);
        alert("Por el else")
>>>>>>> ad56b49c6bc82e1565a32c2fcbacbc88f0e67c4f
    }

}

function validar_contasena(string){

}
//module.exports.validar_nombre_usuario = validar_nombre_usuario;
//module.exports.validar_edad_usuario = validar_edad_usuario;
//module.exports.validar_contasena = validar_contasena;