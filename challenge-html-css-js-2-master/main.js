const quoteContainer = document.querySelector('.quote-container');
const control = [];
var contador = 0;
var iterador = 0;
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const character=''


function fetchQuote(character){
    try{
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${character}`)
            .then(res => res.json())
            .then(data => {createCharCard(data)})
        ;
    
    }
    catch(error){console.error(error)}
 
}


function createCharCard(charCard){
    
    if (!control.includes(charCard[0].quote)){
        console.log(charCard[0].character);
        const card = document.createElement('div');
        card.classList.add('quote-block');
        
        const portraitContainer= document.createElement('div');
        portraitContainer.classList.add('img-container');

        const portrait = document.createElement('img');
        portrait.src=charCard[0].image;

        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = charCard[0].character;

        const quote = document.createElement('p');
        quote.classList.add('quote');
        quote.textContent = charCard[0].quote;
        portraitContainer.appendChild(portrait);
        card.appendChild(portraitContainer);
        card.appendChild(name);
        card.appendChild(quote);
        contador++
        quoteContainer.appendChild(card);
    }else{
       iterador-- 
    }
        
    control.push(charCard[0].quote);

}


let limit = 9;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 10;
    removeChildNodes(quoteContainer);
    fetchQuotes(offset, limit, character);
  }
});

next.addEventListener("click", () => {
  if(contador<50){
    offset += 10;
    removeChildNodes(quoteContainer);
    fetchQuotes(offset, limit, character);
  }
});

function fetchQuotes(offset, limit, character) {
    for (iterador + offset ; iterador <= offset + limit; iterador++) {
      fetchQuote(character);
    }
}


function removeChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}
  
fetchQuotes(offset, limit, character);
  