let text= document.getElementById("text1");
let str = text.innerHTML;

text.innerHTML = "";

let speed = 200;
let i=0;

//efecto de maquina de escribir
function maquinaescribir(){
    if(i < str.length){
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(maquinaescribir, speed);
    }
}

    setTimeout(maquinaescribir, speed);