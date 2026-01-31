const userCardTemplate = document.querySelector("[data-user-template]");

fetch('./travel_recommendation_api.json')
 .then(res => res.json())
 .then(data => {
    data.forEach(post => {})
})
 .catch(error => console.log(error))

 
 
