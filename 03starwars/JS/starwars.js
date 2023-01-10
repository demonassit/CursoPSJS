var w = window.innerWidth;
var h = window.innerHeight;

var intro = document.getElementsByClassName('intro')[0];
var historia = document.getElementsByClassName('historia')[0];
var parrafos = document.getElementsByClassName('parrafos')[0];
var sonido = document.getElementById('sonido');


intro.style.fontSize = w/30 + "px";
historia.style.fontSize = w/20 + "px";
parrafos.style.height = h + "px";

//creamos una funcion que se encargue de redimensionar

window.addEventListener("resize", function(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

    intro.style.fontSize = w/30 + "px";
    historia.style.fontSize = w/20 + "px";
    parrafos.style.height = h + "px";

    //animacion
    inicio();
    nevada();

});

function animar(){

    intro.className = 'intro texto_intro animacion_intro';
    historia.className = 'historia texto_historia animacion_historia';
    sonido.play();
}

//fondo de estrellas
var canvas = document.getElementById('snow');
var ctx = canvas.getContext('2d');

canvas.width = w;
canvas.height = h;

var num = 100;
var tamanio = 2;
var elementos = [];

inicio();
nevada();

function inicio(){

    for(var i = 0; i < num; i++){
        elementos[i] = {
            x : Math.ceil(Math.random()*w),
            y : Math.ceil(Math.random()*h),
            tamanio : Math.random()*tamanio
        }
    }
}

function nevada(){
    ctx.clearRect(0,0, w, h);
    for(var i = 0; i < num; i++){
        var e = elementos[i];
        ctx.beginPath();
        ctx.fillStyle = '#ff6';
        ctx.arc(e.x, e.y, e.tamanio, 0.2*Math.PI);
        ctx.fill();
    }
}
