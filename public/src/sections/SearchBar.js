// DOM fully loaded
document.addEventListener('DOMContentLoaded', () => {
// references to the search form
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
// listener for search form events 
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = searchInput.value.trim();

    const searchResultsHTML = performSearch(query);

    searchResults.innerHTML = searchResultsHTML;
  });

  function performSearch(query) {
    const results = [
      'Result 1: Destination 1',
      'Result 2: Destination 2',          // does this work for you chris ? 
      'Result 3: Destination 3'
    ];

    // Generate HTML for search results
    const searchResultsHTML = searchResults.map(result => `<p>${result}</p>`).join('');

    // Display search results in the container
    searchResultsContainer.innerHTML = searchResultsHTML;
  }
});
