function IzracunajFaktorijel(n) {
    if(n == 0) {
        return 1;
    }
    else {
        return n * IzracunajFaktorijel(n - 1);
    }
}


console.log(IzracunajFaktorijel(5));


