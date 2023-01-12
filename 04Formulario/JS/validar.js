

function validar(formulario){

    if(formulario.nombre.value.length < 4){
        alert("Escriba por lo menos mas de 4 caracteres por favor");
        formulario.nombre.focus();
        return false;
    }

    
    //validamos la cadena completa
    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"+"qwertyuiopasdfghjklñzxcvbnm ";
    //alert(checkOK);

    //obtenemos el campo de texto
    var checkString = formulario.nombre.value;

    //para cambiar el estado true o false
    var todoesvalido = true;
    //alert(todoesvalido);
    //una comparacion de caracter por caracter
    //una cadena vs cadena -> convertir a caracter por caracter
    //tengo que ir recorriendo la cadena

    for(var i = 0; i < checkString.length; i++){

        //tengo que convertir la cadena a caracter
        var ch = checkString.charAt(i);
        //alert(ch);

        for(var j = 0; j < checkOK.length; j++){

            if(ch == checkOK.charAt(j)){
                //alert(i);
                //alert(j);
                break;
            }
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    //validamos la cadena completa
    var checkOK = "1234567890";
    //alert(checkOK);

    //obtenemos el campo de texto
    var checkString = formulario.edad.value;

    //para cambiar el estado true o false
    var todoesvalido = true;
    //alert(todoesvalido);
    //una comparacion de caracter por caracter
    //una cadena vs cadena -> convertir a caracter por caracter
    //tengo que ir recorriendo la cadena

    for(var i = 0; i < checkString.length; i++){

        //tengo que convertir la cadena a caracter
        var ch = checkString.charAt(i);
        //alert(ch);

        for(var j = 0; j < checkOK.length; j++){

            if(ch == checkOK.charAt(j)){
                //alert(i);
                //alert(j);
                break;
            }
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo Edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.correo.value;

    //alert(txt);

    //creamos nuestra expresion regular

    //var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    var b = /[.*+\-?^${}()|[\]\\]/g;

    alert("Email :" + (b.test(txt) ? "  " : " no " ) + "valido");   
    
    return b.test;



}