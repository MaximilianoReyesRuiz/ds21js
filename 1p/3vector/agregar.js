//Reyes Ruiz Maximiliano

insert = (p, v) => { let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(a);

    a.splice(p, 1, v);

    console.log(a);
}

insert(prompt("Ingresa la posicion: "), prompt("Ingresa el valor: ")); 


