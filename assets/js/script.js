window.onload = function() {
    myFunction();    
} 

const img1 = document.getElementById("img01");
const img2 = document.getElementById("img02");
const img3 = document.getElementById("img03");
const img4 = document.getElementById("img04");
var contador = 0;
var tempo = 5000;

function myFunction() {
    const myTimeOut0 = setTimeout(f0,100);
    const myTimeOut5 = setTimeout(myFunction,tempo);
};

function f0(){
    if (contador == 1) {
        fade(img1);
        unfade(img2);
        tempo = 5000;
    } else if (contador == 2) {
        fade(img2);
        unfade(img3);
    } else if (contador == 3) {
        fade(img3);
        unfade(img4);
        tempo = 3000;
    } else if (contador == 4) {
        fade(img4);
        unfade(img1);
        contador=-1;
    }
    contador++;
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}