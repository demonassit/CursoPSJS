/*
Manejo de variables en JS ES6

Las variables que se pueden manipular en JS son 3

var   --> esta siendo sustituida 
let   --> protegida porque solo va a funcionar en un fragmento del codigo
const --> su valor es constante

*/

if(true){

    //declaramos por primera vez x
    const x = "x";
    //vamos a imprimirlo en consola 
    console.log(x);
}

/*
la variable  sigue existiendo y conserva su valor

pero si mando a llamar el valor de x fuera de la funcion
*/ 
//var x = "z";
//console.log(x);

/*
Una funcion flecha

Una funcion flecha es una funcion en JS, que a diferencia de una funcional normal
no genera su propio contexto (this), necesita ser declara antes de ser usada y no 
necesita usar "return" 
*/

//vamos a sumar dos numeros
/*
function sumarFuncionNormal(n1, n2){
    return n1+n2;
}

console.log(`sumarFuncionNormal(3, 4): ${
    sumarFuncionNormal(3,4)
}`);

/*
"cadena" -> Id , clases, name , atributos 

'' -> id, clases, name funcionaban igual ES6

``  -> incorporar codigo de html

*/

//funcion flecha
/*
const sumaFuncionFlecha = (n1, n2) => n1 + n2;
console.log(`sumaFuncionFlecha(4, 5): ${
    sumaFuncionFlecha(4,5)
}`);

//otra forma

const sumaFuncionFlecha1 = (n1, n2) => {
    return n1+n2;
}

console.log(`sumaFuncionFlecha1(5, 6): ${
    sumaFuncionFlecha1(5,6)
}`);

//cuando la funcion flecha tiene un solo parametro, no es necesario envolverlo
//n1*n1

const cuadradoFuncionFlecha = n1 => n1**2;

console.log(`cuadroFuncionFlecha(7): ${
    cuadradoFuncionFlecha(7)
}`);

//vamos a tener un arreglo de cadenas
*/
const razasDePerros = [
    "Gran Danes",
    "Dogo de Burdeos",
    "Pastor Aleman",
    "San Bernardo",
    "Chihuahua",
    "Pitbull",
    "Shar pei"
];
/*
//recorrer este arreglo ocupamos un for
for(let indice = 0; indice < razasDePerros.length; indice++){
    console.log(razasDePerros[indice]);
}

//ahora con la nueva version for/of

for(const raza of razasDePerros){
    console.log(raza);
}

//tambien existe un bucle for/in que itera sobre las llaves del objeto

for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}
*/

//ForEach -> iterar sobre elementos del arreglo que no devuelven nada

//razasDePerros.forEach((raza, indice, arregloOriginal) => console.log(raza));

//que pasa si omitimos alguno de los elementos del forEach

//razasDePerros.forEach(raza => console.log(raza));

//funcion map
//itera sobre los elementos del arreglo y regresa un arreglo diferente con el nos muestra originalmente


//vamos a rrecorrer el arrglo y ahora que se imprima todo en mayus
/*
const razasDePerrosEnMayusculas = razasDePerros.map((raza, indice, arregloOriginal) => 
    console.log(raza.toUpperCase()));


/*
FIND

Nos permite buscar un elemento dentro del arreglo si lo encuentra, lo regresa, y
sino lanza un "undefined"

Quiero buscar a la raza Chihuahua

= es asignar  x = 3
==   es igual x == 3
===  es igual y del mismo tipo y verdadero  x === 3

*/ 
/*
if(razasDePerros.find((raza, indice, arregloOriginal) => 
    raza === "Chihuahua")){
        console.log("la raza se encuentra en el arreglo");
        console.log(razasDePerros);
    }
else{
        //hay que meterlo
        razasDePerros.push("Chihuahua");
        console.log("Se agrego la raza");
        console.log(razasDePerros);

    }

*/

/*
FINDINDEX

es simular a la busqueda, pero en lugar de regresar el elemento, esta nos 
devuelve su indice, sino lo encuentra, devuelve -1, esta funcion es particularmente
util si tenemos que modificar el elemento original dentro del arrreglo
*/
/* 
const indiceDeChihuahua = razasDePerros.findIndex(
    (raza, indice, arregloOriginal) => raza === "Chihuahua")

    if(indiceDeChihuahua > -1){
        //resultado esperado pq si esta dentro del arreglo
        console.log(razasDePerros[indiceDeChihuahua]);
        //aparte voy agregar que diga que la raza es pequeña
        razasDePerros[indiceDeChihuahua] += "(Raza de perros pequeña)";
        //entonces el resultado debe de ser:
        // Chihuahua (Raza de perros pequeña)
        console.log(razasDePerros[indiceDeChihuahua]);
        console.log(razasDePerros);
    }

    */

/*
//en js podemos programar mediante el uso de clases
//clase papa
class FiguraGeometrica{
    //constructor
    constructor(){
        //puede o no tener alguna implementacion
    }
    //metodos
    area(){
        //metodo que se encargue de calcular el area
    }
    perimetro(){
        //metodo para calcular el perimetro
        console.log("Este metodo calcula el perimetro");
    }
}

//puedo aplicar Herencia de una clase

class Rectangulo extends FiguraGeometrica{

    constructor(base, altura){
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }

    calcularArea(){
        return this._base * this._altura;
    }

    calcularPerimetro(){
        return(this._base + this._altura)*2;
    }

    set altura(altura){
        this._altura = altura;
        //si cambia el valor del area y perimetro los debo actualizar
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    set base(base){
        this._base = base;
        //si cambia el valor del area y perimetro los debo actualizar
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    get area(){
        if(this._actualizarArea || !this._area){
            this._area = this.calcularArea();
        }
        return this._area;
    }

    get perimetro(){
        if(this._actualizarPerimetro || !this._perimetro){
            this._perimetro = this.calcularPerimetro();
        }
        return this._perimetro;
    }

}

const objetoRectangulo = new Rectangulo(2,5);

//salida
console.log(objetoRectangulo.area);

//si cambio los valores de 2 , 5
objetoRectangulo.base = 25;

console.log(objetoRectangulo.area)




//Spread   Destructuracion

/*

Spread

Es una sintaxis que nos permite a un elemento iterable (arreglo, matriz, vector, cadena), ser extendido

Vamos a tener dentro de ese elemento desde cero a mas argumentos que van a pasar por una funcion que se va 
a encargar de obtener cada dato sin necesidad de hacer una llamada a cada indice



*/


//tenemos el siguiente arreglo
/*
const arregloOrdenadoMayorMenor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(`arregloOrdenadoMayorMenor: ${
    arregloOrdenadoMayorMenor
}`);

/*
Supongamos que usaremos varias veces la primera posicion que consiste
en el valor mas grande del arreglo, por lo tanto es conveniente utilizar Spread
*/
/*
const [valorMasGrande] = arregloOrdenadoMayorMenor;
console.log(`valorMasGrande: ${
    valorMasGrande
}`);

//que podemos obtener tantas variables del arreglo como deseemos a partir del patron
//el patron es el nombre de la variable con sus correspondientes valores

const [valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores] = arregloOrdenadoMayorMenor;
console.log(`valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores: 
    ${valorMasGrande1}, ${valorMasGrande2}, ${valorMasGrande3}, ${restoValores},
    `);



//supongamos que tenemos un ejemplo y queremos simplificar su busqueda
*/
const resultadoDeBusqueda = {
    resultados: [
        "resultado 1",
        "resultado 2",
        "resultado 3",
        "resultado 4",
        "resultado 5",
        "resultado 6",
        "resultado 7"
    ],
    total : 7,
    mejorCoincidencia : "resultado 3"
};

console.log(`ResultadosDeBusqueda ${
    resultadoDeBusqueda
}`);

//supongamos que solo nos interesa imprimir la mejor coincidencia
const {mejorCoincidencia} = resultadoDeBusqueda;

console.log(`mejorCoincidencia:  ${
    mejorCoincidencia
}`);


//ademas podemos cambiar el nombre, lo cual puede llegar a ser util para mantener la consistencia
//dentro del codigo aplicando Nomenclaturas

const {mejorCoincidencia: nuevoNombre} = resultadoDeBusqueda;

console.log(`nuevoNombre: ${
    nuevoNombre
}`);


//vamos agregar informacion

const copiaDelResultadoDeBusqueda = {...resultadoDeBusqueda};
console.log(`copiaDelResultadoDeBusqueda: ${
    copiaDelResultadoDeBusqueda
}`);


const copiaDelResultadoDeBusquedaModificar = {...resultadoDeBusqueda, cadenaBuscada: "resultado 3"};

console.log(`copiaDelResultadoBusquedaModificar:  ${
    copiaDelResultadoDeBusquedaModificar
}`);