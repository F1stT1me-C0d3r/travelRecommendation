const userCardTemplate = document.querySelector("#data-user-template");
console.log(userCardTemplate)

const userCardContainer = document.querySelector("[data-user-cards-container]");

fetch('./travel_recommendation_api.json')
 .then(res => res.json())
 .then(data => {  
    const card = userCardTemplate.cloneNode(true).textContent
    console.log(card)    
});

