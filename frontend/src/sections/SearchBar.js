
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');




const travelDestinationSeed = async () => {
    const response = await fetch('../../../backend/seeds/travelDestinationSeed.json')
    const data = await response.json()
    return data
}
 console.log(travelDestinationSeed())
