document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const locationSearch = document.querySelector('#locationSearch');
    const searchButton = document.querySelector('#searchButton');
    const clearButton = document.querySelector('#clearButton');
    

    searchButton.addEventListener("submit", function() {
       const query = locationSearch.value,trim().toLowerCase();
       if (query) {
        console.log("Searching for:", query);
        // TODO: Add your search logic here
    } else {
        console.warn("Please enter a location.");
    }

     // Optional: Handle clear button click
    clearButton.addEventListener('click', function () {
        template.innerHTML = "";
    });
});
    

fetchData();

async function fetchData(){
    try{
        
        const res = await fetch('./travel_recommendation_api.json')
 
        if(!res.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await res.json();
        const country = data.countries.cities;        
        const temple = data.temples;        
        const beach = data.beaches;

   
      
    }
    catch(error){
        console.error(error);
    }
}

/* const template = document.querySelector("#template-card")*/