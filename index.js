function IzracunajFaktorijel(n) {
    if(n == 0) {
        return 1;
    }
    else {
        return n * Faktorijel(n - 1);
    }
}


Faktorijel(5);