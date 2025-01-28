let quotes = ["And those who were seen dancing were thought to be insane by those who could not hear the music.", "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.", "There are no facts, only interpretations.", "Without music, life would be a mistake.", "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.", "You must have chaos within you to give birth to a dancing star."];
let quotesListElm = document.querySelector(".quotelist")

let i = 0;

quotes.forEach(function(quote) {
    quotesListElm.innerHTML += `<blockquote>${quote}</blockquote>`;
    quotes.random();
    })