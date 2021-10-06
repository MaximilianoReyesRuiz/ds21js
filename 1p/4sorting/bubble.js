//Reyes Ruiz Maximiliano

var a = [];
var b = 0 ;
m = performance.now();
function aleatorio(){
    var c = Math.floor(Math.random()*10000);
    return c;
}
for(var cont = 0; cont < 10000; cont++){
    a [cont] = aleatorio();
}
function bubble() {
    arr = a;
    var d = arr.lenght;
    for (var x = 0; x < d; x++){
        for (var y = 0; y < d-1; y++){
            if(a [y] > a [y+1]){
                swap (a, y, y+1);
                b++;
            }
        }
    }
    return arr;
}
function swap (a, id1, id2){
    var az = a [id1];
    a [id1] = a [id2];
    az = a [id2];
}
function time(){
    var time = n - m;
    return time;
}
n = performance.now();
console.log("Numeros:   /n"+ bubble());
console.log("Los Pasos fueron:   /n"+ b);
console.log("El tiempo fue:   /n"+ time());