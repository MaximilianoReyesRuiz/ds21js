// Reyes Ruiz Maximiliano 

class Stack{
    constructor(){
        this.items = {};
        this.top = 0;
    }

    // Funcion para agregar elementos a la pila
    push(data){
        this.top++;
        this.items[this.top] = data;
    }

    // Funcion para quitar elementos de la pila
    pop(){
        let deletedData;

        if (this.top){
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        }
    }

    // Funcion para devolver el tamaño de la pila
    getSize(){
        return this.top;
    }

    // Funcion para determinar si la pila tiene elementos
    isEmpty(){
        if (!this.getSize()){
            return true;
        } else {
            return false;
        }
    }

    // Funcion para llamar al ultimo elemento de la pila
    peek(){
        if (this.isEmpty()){
            return null;
        }

        return this.items[this.top];
    }

    // Funcion para imprimir los elementos de la pila
    print(){
        let result = '';
        for (let i = this.top; i > 0; i--){
            result += this.items[i] + ", ";
        }

        return result;
    }
}

const stack = new Stack();

stack.push('Max');
stack.push('Mata');
stack.push('Yael');
stack.push('Vladi');
stack.push('Roger');
stack.push('Brandon');

console.log("Los elementos dentro de la pila son: "+ stack.print());
console.log("El tamaño de la pila es: "+ stack.getSize());
console.log("True si la pila esta vacia o false si tiene elementos: "+ stack.isEmpty());

console.log(stack);