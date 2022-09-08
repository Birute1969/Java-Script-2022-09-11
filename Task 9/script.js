/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget >100000000 === true;
    }
    wasExpensive() {
        return `${this.title} | ${this.director} | ${this.budget}`;
    }
}
let movie1 = new Movie('Talk to Her', 'Pedro Almodovar', "100000000");
let movie2 = new Movie('The age of Innocence', 'Martin Scorsese', "50000000");
let movie3 = new Movie('City of Women', 'Federico Fellini', "300000000");

console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
console.log(movie3.wasExpensive());