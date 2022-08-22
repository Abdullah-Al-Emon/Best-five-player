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

document.getElementById('calculate').addEventListener('click', function () {
    const playerPriceElement = document.getElementById('player-total-price');
    const playerPriceString = playerPriceElement.innerText;
    const playerPrice = parseInt(playerPriceString);

    const list = document.querySelectorAll('.list-content li')
    const listLenght = list.length;
    const listLengthValue = listLenght;
    const listLengthString = parseInt(listLengthValue);

    const playerPurchasePriceField = document.getElementById('player-purchase-price');
    const playerPurchasePriceString = playerPurchasePriceField.value;
    const playerPurchasePrice = parseInt(playerPurchasePriceString);

    const playerTotalPrice = playerPurchasePrice * listLengthString;
    playerPriceElement.innerText = playerTotalPrice;

    document.getElementById('calculate-total').addEventListener('click', function () {
        const managerPriceField = document.getElementById('manager-price');
        const managerPriceFieldString = managerPriceField.value;
        const managerPrice = parseInt(managerPriceFieldString);
    
        const coachPriceField = document.getElementById('coach-price');
        const coachPriceFieldString = coachPriceField.value;
        const coachPrice = parseInt(coachPriceFieldString);
    
        const calculateTotalValue = document.getElementById('all-total-price');
        const calculateTotalValueString = calculateTotalValue.innerText;
        const calculateTotal = parseInt(calculateTotalValueString);
    
        const calculateTotalAll = playerTotalPrice + managerPrice + coachPrice;
        calculateTotalValue.innerText = calculateTotalAll;
    })
})


