//Reyes Ruiz Maximiliano

const a = [2, 3, 5, 7, 11, 13]

primos = n => {

    for (i = 2; i<n; i++){
        if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 11 == 0 || i % 13 == 0){

        }
        else (a.push(i))
    }
    
console.log(`Numeros primos hasta el ${n} `)
console.log(a)
    
}

primos(prompt("Ingresa el limite"))

