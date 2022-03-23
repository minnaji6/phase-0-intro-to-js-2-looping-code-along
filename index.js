// Code your solutions in this file
// writeCards

function writeCards(names,event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

// countDown

function countDown(initalNumber) {
   
    while (0 < initalNumber){
        console.log(initalNumber)
        initalNumber -=1
    }
    console.log (initalNumber);
}