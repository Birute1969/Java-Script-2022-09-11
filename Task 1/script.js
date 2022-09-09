/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.getElementsByName('form');
const search = document.getElementById('search');

const convertToPounds = document.getElementById('Convert-To-Pounds');
const convertToGrams = document.getElementById('Convert-To-Grams');
const convertToOunces = document.getElementById('Convert-To-Ounces');

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
//Priskiriame kgInput verte kintamajam ir paverčiame stringą į skaičių su"Number"
const kg = Number(search.value);
//Susikuriame kintamajį, kad grąžintų "Pounds"
const pounds = convertKgToPounds(kg);
convertToPounds.textContent = pounds;
//Susikuriame kintamajį, kad grąžintų "Grams"
const grams = convertKgToGrams(kg);
convertToGrams.textContent = grams;
//Susikuriame kintamajį, kad grąžintų "Ounces"
const ounces = convertKgToOunces(kg);
convertToOunces.textContent = ounces;
});

const convertKgToPounds = (kg) => {
    return kg*2.2046;
}
const convertKgToGrams = (kg) => {
    return kg/0.0010000;
}
const convertKgToOunces = (kg => {
    return kg*35.274;
});
