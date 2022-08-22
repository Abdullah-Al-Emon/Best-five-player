function card1Title(cardTitle){
    const cardsTitle = document.getElementById(cardTitle);
    const value = cardsTitle.innerText;
    return value
}
function disabled(disableId){
    const disabled = document.getElementById(disableId);
    disabled.classList.add('disabled');
}
function playerNameAdd(name){
    const listContainer = document.getElementById('list-container');
    
    const li = document.createElement('li');
    li.innerText = name;
    listContainer.appendChild(li);
}
