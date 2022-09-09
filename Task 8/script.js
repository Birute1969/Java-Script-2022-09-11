/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function() {
        return this.a + this.b;
    };
    this.substraction = function() {
        return this.a - this.b;
    };
    this.multiplication = function() {
        return this.a * this.b;
    };
    this.division = function () {
        return this.a / this.b;
    };
};

const calculator1 = new Calculator();

calculator1.sum(3, 10);
calculator1.substraction(20, 15);
calculator1.multiplication(12, 12);
calculator1.division(21, 3);