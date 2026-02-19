document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const locationSearch = document.querySelector('#locationSearch');
    const searchButton = document.querySelector('#searchButton');
    const clearButton = document.querySelector('#clearButton');
    

    // Ensure the main input exists before proceeding
    if (searchButton && locationSearch) {
        searchButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form submission if inside a form
            const query = locationSearch.value.trim(); // Remove extra spaces

            if (query) {
                console.log("Search input:", query);
                // TODO: Trigger your search logic here
            } else {
                console.warn("Search input is empty.");
            }
        });
    } else {
        console.error("Search button or input field not found in DOM.");
    }

    // Optional: Handle clear button click
    if (clearButton && locationSearch) {
        clearButton.addEventListener('click', () => {
            locationSearch.value = '';
            console.log("Search input cleared.");
        });
    }
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