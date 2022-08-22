document.getElementById('btn-messi').addEventListener('click', function () {
    card1Title('card1-title')
    disabled('btn-messi')
    // playerNameAdd('Lionel Messi')
    something('Lionel Messi');
})
document.getElementById('btn-neymar').addEventListener('click', function () {
    card1Title('card2-title')
    disabled('btn-neymar')
    // playerNameAdd('Neymar Jr')
    something('Neymar Jr');
})
document.getElementById('btn-mbappe').addEventListener('click', function () {
    card1Title('card3-title')
    disabled('btn-mbappe')
    // playerNameAdd('Kylian Mbappé')
    something('Kylian Mbappé');
})
document.getElementById('btn-vitor').addEventListener('click', function () {
    card1Title('card4-title')
    disabled('btn-vitor')
    // playerNameAdd('Vítor Machado')
    something('Vítor Machado');
})
document.getElementById('btn-sergio').addEventListener('click', function () {
    card1Title('card5-title')
    disabled('btn-sergio')
    // playerNameAdd('Sergio Ramos')
    something('Sergio Ramos');
})
document.getElementById('btn-renato').addEventListener('click', function () {
    card1Title('card6-title')
    disabled('btn-renato')
    // playerNameAdd('Renato Sanches')
    something('Renato Sanches');
})
function something(name){
    const list = document.querySelectorAll('.list-content li')
    const listLenght = list.length + 1;
    if(listLenght >= 5 ){
        alert('you can not buy more than 5 players')
    }else{
        playerNameAdd(name);
    }
    console.log(listLenght);
    document.getElementById('calculate').addEventListener('click', function(){
    const listLengthValue = listLenght;
    const listLengthString = parseInt(listLengthValue);
    // console.log(listLengthString);

    const playerPurchasePriceField = document.getElementById('player-purchase-price');
    const playerPurchasePriceString = playerPurchasePriceField.value;
    const playerPurchasePrice = parseInt(playerPurchasePriceString);

    const playerPriceElement = document.getElementById('player-total-price');
    const playerPriceString = playerPriceElement.innerText;
    const playerPrice = parseInt(playerPriceString);

    const playerTotalPrice = playerPurchasePrice * listLengthString;
    playerPriceElement.innerText = playerTotalPrice

    })


}
