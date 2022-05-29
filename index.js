// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);


function writeCards(names, eventName) {
    const thankMessages = [];

    for (let i = 0; i < names.length; i++) {
        thankMessages[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    }

    return thankMessages;
}


function countDown(countDownInt) {
    while (countDownInt >= 0) {
        console.log(countDownInt);
        countDownInt--;
    }
}