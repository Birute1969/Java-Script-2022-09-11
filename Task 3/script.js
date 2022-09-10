/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const output = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();
})

const renderUserCard = (user) => {
    const login = output.createElement('h3');
    login.innerText = `${user.login}`;

    const avatarUrl = output.createElement('h5');
    avatarUrl.innerText = user.avatar_url;

    const card = output.createElement('div');
    card.append(login, avatarUrl);
    output.append(card);
};


const fetchUsers = async () => {
    try {
        const response = await fetch('https://api.github.com/users');
        if (response.ok) {
            const data = await response.json();
            renderUserCard(data.results[0]);
        }
    } catch(error) {
        console.log(error);
    }
};

fetchUsers();


//sprendimas jei islogini viska konsoleje:
//btn.addEventListener('click', getUsers);

/*const response = fetch(ENDPOINT);

function getUsers() {
    fetch(ENDPOINT)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);//pasitikrinu konsoleje
        })
}*/