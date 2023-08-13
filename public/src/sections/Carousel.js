//see module 11, activity 7, index.js on how to call api info from backend

const bucketList = document.querySelector('#bucket-list');

const cardItem = document.querySelector('.bl-card-item');
const cardMain = document.querySelector('.bl-card-main');
const cardMainDefault = document.querySelector('.bl-card-main-default');
const cardMainInfo = document.querySelector('.bl-card-main-info');

// button variables
const infoBtn = document.querySelector('.destination-info');
const notesBtn = document.querySelector('.destination-notes');
const visitedBtn = document.querySelector('.visited-destination');
const deleteBtn = document.querySelector('.delete-destination');

//button functions
infoBtn.addEventListener('click', () => {
  
});

infoBtn.addEventListener('click', () => {
  console.log('info button clicked');
  if (cardMainInfo.classList.contains('hidden')) {
    cardMainInfo.removeClass('hidden');
    cardMainDefault.addClass('hidden');
  } 
  else if (!cardMainInfo.classList.contains('hidden')) {
    cardMainInfo.addClass('hidden');
    cardMainDefault.removeClass('hidden');
  }
});

//**more pseudo than code, but the idea is to have the notes button
//open the journal entry with a matching destination or a brand new note entry
//alter at will
notesBtn.addEventListener('click', () => {
  if (notes.destination_id === carouselCard.destination_id) {
            location.href='#travel-journal.destination_id';
  } else if (notes.destination_id !== carouselCard.destination_id) {
    location.href='#travel-journal.new_note';
  }
});

visitedBtn.addEventListener('click', () => {
  console.log('visited button clicked');
  if ()
//connect button to entire great-grandparent element
//to remove entire card from carousel and out of bucket-list table
//do we need a separate table for bucket-list?**

deleteBtn.addEventListener("click", () => {
  getElementByClassName("bl-card-item").remove();
});

// removeCard = () => {
//  getElementsByClassName("bl-card-item").remove(); 
// }



const destinations = async () => {
    const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/travelDestinations/destinations', 
    {
        method: 'GET',
    });
    const json = await result.json()
    return json;
  }

console.log(destinations());
const destinationsData = destinations();

console.log(destinationsData.length);

const createCard = (name, country, image, description, visited) => {
  const name = destinationsData[i].name;
  const country = destinationsData[i].country;
  const image = destinationsData[i].image;
  const description = destinationsData[i].description;
  const visited = destinationsData[i].visited

  console.log(name, country, image, description, notes, visited);

  const carouselCard = `
  <li class="bl-card-item">
    <section class="bl-card-body">
      <div class = "bl-card-main">
      <div>
        <div class="bl-card-header">
          <h3 class="bl-item-label">${name},${country} </h3>
        </div>
        <div class="bl-card-image">
          <img class="bl-location-image" src="${image}" 
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
            <h2>About ${name}</h2>
            <div class="destination-info-content">
                <p>${description}</p>
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
              <p>${notes}</p>
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

        bucketList.insertAdjacentHTML('beforeend', carouselCard);
}




