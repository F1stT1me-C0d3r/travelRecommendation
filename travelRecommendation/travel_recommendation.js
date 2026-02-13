document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const locationSearch = document.querySelector('#locationSearch');
    const searchButton = document.querySelector('#searchButton');
    const clearButton = document.querySelector('#clearButton');
    const templateContainer = document.querySelector('#templateContainer')

    // Ensure the main input exists before proceeding
    if (!locationSearch) {
        console.warn("Element with ID 'locationSearch' not found.");
        return;
    }

    // Handle typing in the search box
    locationSearch.addEventListener('keyup', (e) => {
        if (e.target && typeof e.target.value === 'string') {
            const currentValue = e.target.value.trim().toLowerCase();
            console.log("Search input:", currentValue);
        }
    });


    // Optional: Handle search button click
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const query = locationSearch.value.trim().toLowerCase();
            console.log("Search button clicked with query:", query);
        });
    }

    // Optional: Handle clear button click
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            locationSearch.value = '';
            console.log("Search input cleared.");
        });
    }
});



/*fetch('./travel_recommendation_api.json')
 .then(res => res.json())
 .then(data => {
    const templateCard = document.querySelector('#template-card');
    templateCard.innerHTML = `

                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.countries[0].cities[0].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.countries[0].cities[0].name}</div>
                                    <div class="description">${data.countries[0].cities[0].description}</div>
                                </div>
                            </div>
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.countries[0].cities[1].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.countries[0].cities[1].name}</div>
                                    <div class="description">${data.countries[0].cities[1].description}</div>
                                </div>
                            </div>
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.countries[1].cities[0].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.countries[1].cities[0].name}</div>
                                    <div class="description">${data.countries[1].cities[0].description}</div>
                                </div>
                            </div>
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.countries[1].cities[1].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.countries[1].cities[1].name}</div>
                                    <div class="description">${data.countries[1].cities[1].description}</div>
                                </div>
                            </div>
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.countries[2].cities[0].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.countries[2].cities[0].name}</div>
                                    <div class="description">${data.countries[2].cities[0].description}</div>
                                </div>
                            </div>
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.countries[2].cities[1].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.countries[2].cities[1].name}</div>
                                    <div class="description">${data.countries[2].cities[1].description}</div>
                                </div>
                            </div>            
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.temples[0].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.temples[0].name}</div>
                                    <div class="description">${data.temples[0].description}</div>
                                </div>
                            </div>
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.temples[1].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.temples[1].name}</div>
                                    <div class="description">${data.temples[1].description}</div>
                                </div>
                            </div>
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.beaches[0].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.beaches[0].name}</div>
                                    <div class="description">${data.beaches[0].description}</div>
                                </div>
                            </div>
                            <div class="location-cards" id="template-card">
                                <div class="imageURL">${data.beaches[1].imageUrl}</div>
                                <div class="card">                                
                                    <div class="name">${data.beaches[1].name}</div>
                                    <div class="description">${data.beaches[1].description}</div>
                                </div>
                            </div>'
                         
                
            
}); Uncomment once I've figured out the full extent of the fetchAPI */

