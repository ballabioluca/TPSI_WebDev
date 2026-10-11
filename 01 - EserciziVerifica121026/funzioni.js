// Es 1

function saluta () {
    return ("Benvenuti a bordo")
}

// const <nome> = variabile che non cambiera nel codice (costante)
// let <nome> = dichiarazione classica (SENZA TIPO, è sottointeso)

const s1 = saluta; // LA FUNZIONE SALUTA() IN SE E PER SE 
const s2 = saluta(); // IL VALORE RESTITUITO DA SALUTA()

console.log(typeof s1) // "function"
console.log(typeof s2) // "string"
console.log(s1()) // "Benvenuti a bordo"

// Es 2

function raddoppia (n) {
    return (n*2)
}

function incrementa (n) {
    return (n+1)
}

function applica (f, x) {
    return (f(x))
}

console.log(applica(raddoppia, 21)) // 42
console.log(applica(incrementa, 41)) // 42
console.log(applica(raddoppia, applica(incrementa, 4))) // 10

// Es 3

function applicaDueVolte(f, x) {
    return applica(f, applica(f, x))
}

console.log(applicaDueVolte(raddoppia, 5)) // 20
console.log(applicaDueVolte(incrementa, 5)) // 7
console.log(applicaDueVolte(raddoppia, "3")) // 12

// Es 4

function applicaNVolte(f, n, x) {
    if (n == 0) {
        return x
    } else {
        for (let z=0; z < n; z++){
            x = f(x)
        }
        return x
    }
}

console.log(applicaNVolte(raddoppia, 10, 1)) // 1024
console.log(applicaNVolte(incrementa, 3, 7)) // 10
console.log(applicaNVolte(incrementa, 0, 7)) // 7

// Es 5

// == (Due uguali) sono una comparazione che tenta di "tradurre" le variabile nello stesso tipo (SCONSIGLIATO)
// === (Tre uguali) sono una comparazione "stretta" --> DA USARE SE IN DUBBIO <-- (!= si scrive !== in questo caso)

function isNumeroValido(x) {
    return typeof x === "number" && !Number.isNaN(x)
}

function isStringaNonVuota(x) {
    return typeof x === "string" && x.length > 0 
}

function isFunzione(x) {
    return typeof x === "function" 
}

function raddoppia(n) {
    return n * 2;
}

console.log(isNumeroValido(3)); // true
console.log(isNumeroValido("3")); // false
console.log(isNumeroValido(NaN)); // false
console.log(isStringaNonVuota("Orione")); // true
console.log(isStringaNonVuota("")); // false
console.log(isStringaNonVuota(5)); // false
console.log(isFunzione(raddoppia)); // true
console.log(isFunzione(raddoppia(2))); // false

// Es 6

function applicaSicuro(f, x) {
    if (isFunzione(f) == false) {
        return "ERRORE: f non è una funzione"
    } else if (isNumeroValido(x) == false) {
        return "ERRORE: x non è un numero"
    } else {
        return f(x)
    }
}

console.log(applicaSicuro(raddoppia, 4)) // 8
console.log(applicaSicuro(raddoppia(4), 4)) // ERRORE: f non è una funzione
console.log(applicaSicuro(raddoppia, "4")) // ERRORE: x non è un numero
console.log(applicaSicuro(incrementa, NaN)) // ERRORE: x non è un numero