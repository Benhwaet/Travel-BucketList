const bucketList = document.querySelector('#bucket-list');

document.addEventListener('DOMContentLoaded', () => {
const infoBtn = document.querySelector('.destination-info');
const modal = document.querySelector('#infoModal');
const closeBtn = document.querySelector('#closeBtn');
const infoContent = document.querySelector('.destination-info-content');
const deleteBtn = document.querySelector('.delete-destination');
const visitedBtn = document.querySelector('.visited-destination');
const notesBtn = document.querySelector('.destination-notes');
const notesContent = document.querySelector('.destination-notes-content');
const notesModal = document.querySelector('#notesModal');


infoBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

notesBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});
});

const travelDestinationSeed = async () => {
    const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/travelDestinations/destinations', {
        method: 'GET',
    });
    const json = await result.json()
    return json;
}
console.log(travelDestinationSeed());

searchBtn.addEventListener('click', () => {
    console.log('search button clicked');

    for (let i = 0; i < destinations[i].length; i++) {

        const travelDestinationData = {
            name: destinations[i].name,
            country: destinations[i].country,
            image: destinations[i].image,
            description: destinations[i].description,
            notes: destinations[i].notes,
            visited: destinations[i].visited
        }

        
        const carouselCard = `
  <li class="bl-card-item">
    <section class="bl-card-body">
      <div class = "bl-card-main">
      <div>
        <div class="bl-card-header">
          <h3 class="bl-item-label">${destinations[i].name},${destinations[i].country} </h3>
        </div>
        <div class="bl-card-image">
          <img class="bl-location-image" src="${destinations[i].image}" 
          alt="location image from Unsplash or creative commons sources" />
        </div>
      </div>
      </div>
      <div class="bl-buttons-footer">
        <smart-button class="destination-info btn">
          <i class="icon fa-solid fa-circle-info"><a href="#tabs"></a></i>
        </smart-button>
        <div id="infoModal" class="modal">
          <div class="modal-content">
            <span class="close" id="closeBtn">&times;</span>
            <h2>About ${destinations[i].name}</h2>
            <div class="destination-info-content">
                <p>${destinations[i].description}</p>
            </div>
          </div>
        </div>
        <smart-button class="destination-notes btn">
          <i class="icon fa-solid fa-list"><a href="#journal"></a></i>
        </smart-button>
        <div id="notesModal" class="modal">
        <div class="modal-content">
          <span class="close" id="closeBtn">&times;</span>
          <h2>Insert Title Here</h2>
          <div class="destination-info-content">
              <p>${destinations[i].notes}</p>
          </div>
        </div>
      </div>
        <smart-button class="visited-destination btn">
          <i class="icon fa-solid fa-check"></i>
        </smart-button>
        <smart-button class="delete-destination btn" onclick="removeCard()">
          <i class="icon fa fa-trash"></i>
        </smart-button>
      </div>
    </section>
  </li>
`

        console.log(travelDestinationData);

        bucketList.insertAdjacentHTML('beforeend', carouselCard);
    }
});


