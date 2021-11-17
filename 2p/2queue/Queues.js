// Reyes Ruiz Maximiliano 

class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    // Funcion para agregar elementos a la fila
    enqueue(data){
        this.items[this.end] = data;
        this.end++;
    }

    // Funcion para eliminar elementos de la fila
    dequeue(){
        if(this.front === this.end){
            return null;
        };

        const data = this.items[this.fornt];
        delete this.items[this.front];
        this.front++;
        return data;
    }

    // Funcion para obtener el tamaño de la fila
    getSize(){
        return this.end - this.front;
    }

    // Funcion para saber si la fila tiene elementos o esta vacia
    isEmpty(){
        if (this.getSize() === 0){
            return true;
        } else {
            return false;
        }
    }

    // Funcion para ver el primer elemento de la fila
    peek(){
        if (this.getSize() === 0){
            return null;
        }
        return this.items[tjos.front];
    }

    // Funcion para imprimir todos los elementos dentro de la fila
    print(){
        if (this.getSize() === 0){
            return null;
        }

        let result = '';
        for (let i = this.front; i < this.end; i++){
            result += this.items[i] + ", "
        }

        return result;
    }
}

const queue = new Queue();

queue.enqueue("Max");
queue.enqueue("Mata");
queue.enqueue("Yael");
queue.enqueue("Vladi");
queue.enqueue("Roger");
queue.enqueue("Brandon");

console.log("El tamaño de la fila es: "+ queue.getSize());
console.log("Los elementos dentro de la fila son: "+ queue.print());
console.log(queue); 