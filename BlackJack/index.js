let player = {
    name: "Ayush",
    chips: 699
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let ranNum = Math.floor(Math.random()*13) + 1;
    if (ranNum === 1){
        return 11;
    }
    else if (ranNum > 10){
        return 10;
    }
    else{
        return ranNum;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0 ; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 21){
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "YOU GOT A BLACKJACK!";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
  
    
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}