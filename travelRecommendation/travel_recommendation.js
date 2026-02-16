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

        const templateCard = document.querySelector('#template-card');
    templateCard.innerHTML =

'<div>
    <div class="imageURL">${data.countries.cities.imageUrl}</div>
    <div class="card">                                
        <div class="name">${data.countries.cities.name}</div>
        <div class="description">${data.countries.cities.description}</div>
    </div>
</div>
        
<div>
    <div class="imageURL">${data.temples.imageUrl}</div>
    <div class="card">                                
        <div class="name">${data.temples.name}</div>
        <div class="description">${data.temples.description}</div>
    </div>
</div>

<div>
    <div class="imageURL">${data.beaches.imageUrl}</div>
    <div class="card">                                
        <div class="name">${data.beaches.name}</div>
        <div class="description">${data.beaches.description}</div>
    </div>
</div>'})

.catch(error => console.error('Error Posting Location Info',error));
const locationInfo = document.querySelector('locationInfo');
            locationInfo.innerHTML = `<p>Failed to fetch Locations. Please try again.</p>`;

 document.querySelector('templateContainer').addEventListener('submit',fetchData());

       

    }
    catch(error){
        console.error(error);
    }
}

/*fetch('./travel_recommendation_api.json')
 .then(res => {
    if(!res.ok){
        throw new Error("Could not fetch resource");
    }
    return res.json();
 })
 .then(data => {
    const templateCard = document.querySelector('#template-card');
    templateCard.innerHTML =

'<div>
    <div class="imageURL">${data.countries.cities.imageUrl}</div>
    <div class="card">                                
        <div class="name">${data.countries.cities.name}</div>
        <div class="description">${data.countries.cities.description}</div>
    </div>
</div>
        
<div>
    <div class="imageURL">${data.temples.imageUrl}</div>
    <div class="card">                                
        <div class="name">${data.temples.name}</div>
        <div class="description">${data.temples.description}</div>
    </div>
</div>

<div>
    <div class="imageURL">${data.beaches.imageUrl}</div>
    <div class="card">                                
        <div class="name">${data.beaches.name}</div>
        <div class="description">${data.beaches.description}</div>
    </div>
</div>'})

.catch(error => console.error('Error Posting Location Info',error));
const locationInfo = document.querySelector('locationInfo');
            locationInfo.innerHTML = `<p>Failed to fetch Locations. Please try again.</p>`;

 document.querySelector('templateContainer').addEventListener('submit',fetchData());


*/

