document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const locationSearch = document.querySelector('#locationSearch');
    const searchButton = document.querySelector('#searchButton');
    const clearButton = document.querySelector('#clearButton');

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
}); Uncomment once I've figured out the full extent of the fetchAPI */

