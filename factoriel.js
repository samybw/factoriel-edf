var nombre = process.argv[2];



function facto(n) {
    if (n <= 0) {
        return 1
    }
    return n * facto( n - 1 )
    
}


console.log(facto(nombre));










// 3! = 1 × 2 × 3 = 6