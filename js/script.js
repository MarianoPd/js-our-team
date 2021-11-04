const members = [
    {
        name: 'Wayne Barrett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
]

const team = document.querySelector('.team-container');
//caricamento iniziale degli elementi
layCards(team, members);

const addButton = document.getElementById('addMemberButton');
console.log(addButton);
addButton.addEventListener('click', layAgain);

// Funzione che prende il container .team-container e gli crea all'interno le card con gli oggetti di members
function layCards(container, members){
    container.innerHTML= '';
    for(let key of members){
        container.appendChild(makeCard(key));
    }
}


//funzione che prende i parametri in imput *senza verificarli* e ne crea un oggetto, dopo di che reinserisce nell'html tutti gli oggetti 
function layAgain(){
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const image = document.getElementById('image').value;
    members.push({name,role,image});
    layCards(team, members);
    console.log(members);
}

//crea una card e la riempie usando i valori di member
function makeCard(member){
    const card = document.createElement('div');
    card.classList.add('team-card');
    
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    const image = document.createElement('img');
    image.src = "img/" + member.image;
    cardImage.appendChild(image);
    
    const cardText = document.createElement('div');
    cardText.className = 'card-text';
    const cardName = document.createElement('h3');
    cardName.innerHTML = member.name;
    const cardRole = document.createElement('p');
    cardRole.innerHTML = member.role;
    cardText.appendChild(cardName);
    cardText.appendChild(cardRole);

    card.appendChild(cardImage);
    card.appendChild(cardText);

    return card;
}