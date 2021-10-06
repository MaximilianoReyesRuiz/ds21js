//Reyes Ruiz Maximiliano 

remove = (p) => { let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(a);

    a.splice(p, 1);

    console.log(a);
}

remove(prompt("Ingresa la posicion: "));