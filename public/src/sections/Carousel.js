//see module 11, activity 7, index.js on how to call api info from backend

const destinationList = document.querySelector('#bucket-list');

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
    window.addEventListener('click', (event) => {
      if (event.target === infoModal) {
        infoModal.style.display = 'none';
      }
    });

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


const visitedBtn = document.querySelector('.visited-destination');
const deleteBtn = document.querySelector('.delete-destination');
const icon = document.querySelector('.icon');



//**more pseudo than code, but the idea is to have the notes button

//alter at will
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

const visitedBtns = document.querySelectorAll('.visited-destination');

visitedBtns.forEach((visitedBtn) => {

  visitedBtn.addEventListener('click', () => {
    console.log('visited button clicked');

    if (visitedBtn.classList.contains('fa-check')) {
      visitedBtn.classList.remove('fa-check');
      visitedBtn.addClass('fa-check-circle');
      visitedBtn.style.color = 'purple';
    } else if (visitedBtn.classList.contains('fa-check-circle')) {
      visitedBtn.classList.remove('fa-check');
      visitedBtn.addClass('fa-check-circle');
      visitedBtn.style.color = '#004e5a';
    }
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
// const destinations = async () => {
//   const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/travelDestinations/destinations', 
//   {
//       method: 'GET',
//   });
//   const json = await result.json()
//   return json;
// }

// const destinationsData = destinations();
// console.log(destinationsData);

// const destination = (destination) => {
//   destination = document.createElement("section");
//   destination.classList.add("destination");

//   const name = destination.name;
//   const country = destination.country;
//   const image = destination.image;
//   const description = destination.description;
//   const notes = destination.notes;
//   const visited = destination.visited;


//   //serves as the template for the destination to be filled out by API data

// destination.innerHTML = `<li class="bl-card-item">
//     <section class="bl-card-body">
//       <div class = "bl-card-main">
//       <div>
//         <div class="bl-card-header">
//           <h3 class="bl-item-label">${name},${country} </h3>
//         </div>
//         <div class="bl-card-image">
//           <img class="bl-location-image" src="${image}" 
//           alt="location image from Unsplash or creative commons sources" />
//         </div>
//       </div>
//       </div>
//       <div class="bl-buttons-footer">
//         <smart-button class="destination-info btn">
//           <i class="icon fa-solid fa-circle-info"><a href="#tabs"></a></i>
//         </smart-button>
//         <div id="infoModal" class="modal">
//           <div class="modal-content">
//             <span class="close" id="closeBtn">&times;</span>
//             <h2>About ${name}</h2>
//             <div class="destination-info-content">
//                 <p>${description}</p>
//             </div>
//           </div>
//         </div>
//         <smart-button class="destination-notes btn">
//           <i class="icon fa-solid fa-list"><a href="#journal"></a></i>
//         </smart-button>
//         <div id="notesModal" class="modal">
//         <div class="modal-content">
//           <span class="close" id="closeBtn">&times;</span>
//           <h2>Insert Title Here</h2>
//           <div class="destination-info-content">
//               <p>${notes}</p>
//           </div>
//         </div>
//       </div>
//         <smart-button class="visited-destination btn">
//           <i class="icon fa-solid fa-check"></i>
//         </smart-button>
//         <smart-button class="delete-destination btn" onclick="removeCard()">
//           <i class="icon fa fa-trash"></i>
//         </smart-button>
//       </div>
//     </section>
//   </li>`

//   return destination;
// };
