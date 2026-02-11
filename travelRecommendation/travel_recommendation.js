const locationSearch = document.querySelector('#locationSearch');
/*const searchButton = document.getElementById('searchButton');
const clear = document.getElementById('clearButton');*/


locationSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
});


/*fetch('./travel_recommendation_api.json')
 .then(res => res.json())
 .then(data => {
}); Uncomment once I've figured out the full extent of the fetchAPI */

