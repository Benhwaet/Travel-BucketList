//see module 11, activity 7, index.js on how to call api info from backend
const bucketList = document.querySelector('#bucket-list');  //this is the ul

window.onload = async() => {

  const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/travelDestinations/destinations', 
  {
      method: 'GET',
  });
  const json = await result.json()

  const travelDestinations = json.destinations;

  console.log(travelDestinations.length);

  for (let i = 0; i < travelDestinations.length; i++) {
    
    let name = travelDestinations[i].name;
    let country = travelDestinations[i].country;
    let image = travelDestinations[i].image;
    let description = travelDestinations[i].description;
    let notes = travelDestinations[i].notes;
    let visited = travelDestinations[i].visited;
    let destination_id = travelDestinations[i].destination_id;

  //serves as the template for the destination to be filled out by API data

let destinationsData = `<li id="destinationId_${destination_id}" class="bl-card-item">
    <section class="bl-card-body">
      <div class = "bl-card-main">
      <div>
        <div class="bl-card-header">
          <h3 class="bl-item-label">${name}, ${country} </h3>
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
        <smart-button class="visited-destination btn check-${visited}">
          <i class="icon fa-solid fa-check"></i>
        </smart-button>
        <smart-button class="delete-destination btn">
          <i class="icon fa fa-trash"></i>
        </smart-button>
      </div>
    </section>
  </li>`

  bucketList.insertAdjacentHTML('beforeend', destinationsData);



const cardItem = document.querySelector('.bl-card-item');
const cardMain = document.querySelector('.bl-card-main');
const infoModal = document.querySelector('#info-modal');
const infoModalContent = document.querySelector('#info-modal-content');
const closeBtn = document.querySelector('#closeBtn');

// forEach(variable => {  })
const cardItems = document.querySelectorAll('.bl-card-item');
const cardMains = document.querySelectorAll('.bl-card-main');
const infoModals = document.querySelectorAll('#info-modal');
const infoModalContents = document.querySelectorAll('#info-modal-content');


// button variables and eventListener functiobs
//to display the modal containing destination descriptions
// --> still need to figure out individual button targeting for info btns
const infoBtns = document.querySelectorAll('.destination-info');

infoBtns.forEach((infoBtn) => {

  infoBtn.addEventListener('click', () => {
    console.log('click click boom');

    ///not in the right position, but worked before adding
    //closest to the closeBtns
      // window.addEventListener('click', (event) => {
      //   if (event.target === infoModal) {
      //     infoModal.style.display = 'none';
      //   }
      // });
    
    infoModals.forEach((infoModal) => {
      infoModal.style.display = 'block';

      const closeBtns = document.querySelectorAll('#closeBtn');
      closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', function () {
          const closeInfoModal = closeBtn.closest('.modal');
          closeInfoModal.style.display = 'none';
        })
      });
    });
  });
});

//to link the destination card to its journal entry(ies)
const noteBtns = document.querySelectorAll('.destination-notes');

noteBtns.forEach((noteBtn) => {
noteBtn.addEventListener('click', () => {
  location.href = '#editor-section';
// for now, go to the journal editor section
  //PSEUDOcode - open the journal entry with a matching destination or a brand new note entry
  // if (notes.destination_id === carouselCard.destination_id) {
  //   location.href = '#travel-journal.destination_id';
  // } else if (notes.destination_id !== carouselCard.destination_id) {
  //   location.href = '#travel-journal.new_note';
  // }
});
});

// visited true/false button
const visitedBtns = document.querySelectorAll('.visited-destination');
const icons = document.querySelectorAll('.icon');
const visitCheck = document.querySelector('.fa-check');
const visitCheckCircle = document.querySelector('.fa-check-circle');

visitedBtns.forEach((visitedBtn) => {

  visitedBtn.addEventListener('click', () => {
    const checkBtn = visitedBtn.closest('.icon'); //checkmark
    console.log('visited button clicked');

    icons.forEach((icon) => {
      if (icon.classList.contains('fa-check')) 
      {
        icon.classList.remove('fa-check');
        icon.addClass('fa-check-circle');
        checkBtn.style.color = 'purple';
      } 
      else if (icon.classList.contains('fa-check-circle')) 
      {
        icon.classList.remove('fa-check');
        icon.addClass('fa-check-circle');
        checkBtn.style.color = '#004e5a';
      }
    });
  });
});

//to remove entire card from carousel and out of bucket-list table
//do we need a separate table for bucket-list or do we just delete elements from the carousel?
const deleteBtns = document.querySelectorAll('.delete-destination');

deleteBtns.forEach((deleteBtn) => {
deleteBtn.addEventListener("click", () => {
  const deleteCard = deleteBtn.closest('.bl-card-item');
  deleteCard.remove();
});
});
};
};