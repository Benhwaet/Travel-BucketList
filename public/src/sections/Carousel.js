

//see module 11, activity 7, index.js on how to call api info from backend
const bucketList = document.querySelector('#bucket-list');  //this is the ul

window.onload = async () => {

  const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/travelDestinations/destinations',
    {
      method: 'GET',
    });
  const json = await result.json()

  const travelDestinations = json.destinations;

  

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
        <button class="destination-info bl-btn">
          <i class="icon fa-solid fa-circle-info"></i>
        </button>
        <div id="info-modal" class="modal">
          <div id="info-modal-content" class="modal-content">
            <span class="close" id="close-button">&times;</span>
            <h2>About ${name}</h2>
            <div class="destination-info-content">
                <p>${description}</p>
            </div>
          </div>
        </div>
        <button class="destination-notes bl-btn">
          <i class="icon fa-solid fa-list"><a href="#journal"></a></i>
        </button>
        <div id="notesModal" class="modal">
        <div class="modal-content">
          <span class="close" id="closeBtn">&times;</span>
          <h2>Insert Title Here</h2>
          <div class="destination-info-content">
              <p>${notes}</p>
          </div>
        </div>
      </div>
        <button class="visited-destination bl-btn check-${visited}">
          <i class="icon fa-solid fa-check"></i>
        </button>
        <button class="delete-destination bl-btn">
          <i class="icon fa fa-trash"></i>
        </button>
      </div>
    </section>
  </li>`

    bucketList.insertAdjacentHTML('beforeend', destinationsData);

  }

  
  // button variables and eventListener functiobs
  //to display the modal containing destination descriptions
  const blBtns = document.querySelectorAll('.bl-buttons-footer');

  blBtns.forEach((blBtn) => {
    blBtn.addEventListener('click', (event) => {
      event.preventDefault();
      // button variables and eventListener functions
      const infoBtns = document.querySelectorAll('.destination-info');
      const infoModals = document.querySelectorAll('#info-modal');

      infoBtns.forEach((infoBtn) => {
        infoBtn.addEventListener('click', (event) => {
          event.preventDefault();

        
          // const infoModal = infoBtn.closest('#info-modal');
          thisModal = infoBtn.closest('.bl-card-item').querySelector('#info-modal');
            thisModal.style.display = 'block';

          const closeBtns = document.querySelectorAll('#close-button');
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
            if (icon.classList.contains('fa-check')) {
              icon.classList.remove('fa-check');
              icon.addClass('fa-check-circle');
              checkBtn.style.color = 'purple';
            }
            else if (icon.classList.contains('fa-check-circle')) {
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
        }
        )
      });
    }
 )};

// const ffwBtn = document.querySelector('.ffw');
// const rwdBtn = document.querySelector('.rwd');
// const marquee = document.querySelector('marquee');

// ffwBtn.addEventListener('click', () => {
//   console.log('zoom')
//   marquee.setAttribute('scrollamount', '+5');
// });

// rwdBtn.addEventListener('click', () => {
//   marquee.setAttribute('scrollamount', '-5');
// } );
