/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const myRequest = fetch('./cars.json');

myRequest
.then((res) => res.json())
.then((data) => {
    const ulElement = document.createElement('ul');
    ulElement.id = 'content';
    //ulElement.textContent  = `Car Brand: ${brand}`;
    
    data.forEach((carInfo) => {
        const liElement = document.createElement('li');
        liElement.textContent = `Car Model: ${carInfo.models.name}`;
        ulElement.appendChild(liElement);
    });
    document.body.appendChild(ulElement);
});

//console.log(myRequest);

