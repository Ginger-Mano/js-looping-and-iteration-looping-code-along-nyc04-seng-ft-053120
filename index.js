// Code your solutions in this file
function writeCards(names, eventName) {
    let cardsArray = []
    for (let i = 0; i < names.length; i++) {
    cardsArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)  
}
return cardsArray
}

function countDown(positiveInt) {
    let i = 0;
    while ( i < positiveInt ) {
        console.log(positiveInt);
        positiveInt -= 1;
    }
    console.log(positiveInt);
}

