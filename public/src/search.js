document.addEventListener('DOMContentLoaded', function () {
    const searchResults = document.getElementById('search-results');
    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = searchParams.get('search');
  
   
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/travelDestinations/destinations?search=${searchTerm}`, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          displaySearchResults(data);
        } else {
          console.error('Error fetching data:', xhr.status);
        }
      }
    };
    xhr.send();
  
    
    function displaySearchResults(data) {
    
      data.forEach(destination => {
        const resultElement = document.createElement('div');
        resultElement.textContent = destination.name;
        searchResults.appendChild(resultElement);
      });
    }
  });