const userCardTemplate = document.querySelector("[data-user-template]");

fetch('./travel_recommendation_api.json')
 .then(res => res.json())
 .then(data => showInfo(data));
 
 function showInfo(data){
    console.table(data.beaches);
 }

 
 
