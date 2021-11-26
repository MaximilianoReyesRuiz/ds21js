//Reyes Ruiz Maximiliano 

function Pila(n)
{
    this.dataStore = [];
    this.top = 0
    this.push = push
}
function push(obj) 
{
    this.dataStore[this.top++] = obj;
}

class ListaEnlazadaObj
{
    constructor(value, next)
    {
        this.value = value;
        this.next = next;
    }
}
class ListaEnlazada
{
    contructor() 
    {
        this.head = null;
    }
    prepend(value) 
    {
        const newItem = new ListaEnlazadaObj(value, this.head);
        this.head = newItem;
    }
}

var cont1 = 0, cont2 = 0;
var time1 = 0, time2 = 0;

while (cont1 < 7)
{
   var list = new Pila();
   var start = new Date();
   for(var i=0;i<10000;i++)
   {
      list.push(Math.round(Math.random()*10000))
   }
   let end = new Date() - start;
   cont1++;
   time1+=end;
 
}

console.log(list);
console.log("El tiempo promedio en las 7 corridas de la Pila fue: " + time1/7 + " ms");

while (cont2 < 7)
{
   list = new ListaEnlazada();
   var start = new Date();
   for(var i=0;i<10000;i++)
   {
      list.prepend(Math.round(Math.random()*10000))
   }
   let end = new Date() - start;
   cont2++;
   time2+=end;
}

console.log(list);
console.log("El tiempo promedio en las 7 corridas de la Lista Enlazada fue: " + time2/7 + " ms");
