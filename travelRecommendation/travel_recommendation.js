document.addEventListener('DOMContentLoaded', () => {
    const locationSearch = document.querySelector('#locationSearch');
    const searchButton = document.querySelector('#searchButton');
    const clearButton = document.querySelector('#clearButton');
    const templateCard = document.querySelector('#template-card');

    if (!searchButton || !locationSearch || !templateCard) {
        return;
    }

    searchButton.addEventListener('click', async () => {
        const query = locationSearch.value.trim().toLowerCase();
        if (!query) {
            templateCard.innerHTML = '';
            return;
        }

        const results = await fetchData(query);
        renderResults(results, templateCard);
    });

    if (clearButton) {
        clearButton.addEventListener('click', () => {
            locationSearch.value = '';
            templateCard.innerHTML = '';
        });
    }
});

async function fetchData(query) {
    try {
        const res = await fetch('./travel_recommendation_api.json');

        if (!res.ok) {
            throw new Error('Could not fetch resource');
        }

        const data = await res.json();
        const countryCities = data.countries.flatMap((country) => country.cities);
        const temples = data.temples;
        const beaches = data.beaches;

        const allDestinations = [...countryCities, ...temples, ...beaches];

        return allDestinations.filter((destination) => {
            const nameMatch = destination.name.toLowerCase().includes(query);
            const descriptionMatch = destination.description.toLowerCase().includes(query);
            return nameMatch || descriptionMatch;
        });
    } catch (error) {
        console.error(error);
        return [];
    }
}

function renderResults(results, templateCard) {
    if (!results.length) {
        templateCard.innerHTML = '<p>No matching destinations found.</p>';
        return;
    }

    templateCard.innerHTML = results
        .map(
            (result) => `
                <span>
                    <img src="${result.imageUrl}" alt="${result.name}" width="400" height="400">
                    <h1>${result.name}</h1>
                    <p>${result.description}</p>
                </span>
            `
        )
        .join('');
}
