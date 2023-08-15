
  window.onload = async () => {

    //Lines 5-49 are for the journal API data, can be commented out since some database links 
    //have not been implemented yet, ex: name and country for the journal entry linking journal and scroll locations
      const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/journal/entries',
        {
          method: 'GET',
        });
        
      const json = await result.json()
      console.log(json.entries)


    const journalEntries = json.entries

    console.log(journalEntries)

    for (let i = 0; i < journalEntries.length; i++) {


      let username = journalEntries[i].username;
      let entryDate = journalEntries[i].entryDate;
      let title = journalEntries[i].title;
      let entryContent = journalEntries[i].entryContent;
      let entry_id = journalEntries[i].entry_id;

      //serves as the template for the journal entry to be filled out by API data
     const journalEntry = `<div class="paragraph journal-container">
    <div class="journal-header">
      <h2 contentEditable="true" class="destination-name">Moncton, Canada</h2>
      <h3 contentEditable="true" class="authored">#${entry_id} by ${username}, on ${entryDate}</h3>
    </div>
    <div class="journal-body">
      <div class="journal-entry">
        <div class="journal-entry-header">
          <h3 contentEditable="true" class="journal-title">${title}</h3>
        </div>
        <div class="journal-entry-body">
          <p contentEditable="true">${entryContent}</p>
        </div>
      </div>
    </div>
  </div>
</section>`

const scrollableArea = document.getElementById('scrollableArea');
scrollableArea.insertAdjacentHTML('beforeend', journalEntry);

};
  

const scrollableArea = document.getElementById('scrollableArea');
let paragraphCounter = 0;

function createParagraph() {
  const paragraph = document.createElement('div');
  paragraph.classList.add('paragraph');
  paragraph.setAttribute('contenteditable', 'true'); // Makes the paragraphs editable
  
  // Adds placeholder text ** leaving this basic **
  paragraph.textContent = `Write About Your Trip Here........ `;
  
  scrollableArea.appendChild(paragraph);
  paragraphCounter++;
}

// Initial paragraphs
for (let i = 0; i < 5; i++) {
  createParagraph();
}

//  listener for scroll detection
scrollableArea.addEventListener('scroll', () => {
  if (scrollableArea.scrollTop + scrollableArea.clientHeight >= scrollableArea.scrollHeight) {
    // When scroll reaches the bottom, add new paragraphs hence infinite lol ....temp journal fix 
    for (let i = 0; i < 3; i++) {
      createParagraph();
    }
  }
});

// save button
const saveButton = document.getElementById('saveButton');
const paragraph = document.querySelector('.paragraph'); 

saveButton.addEventListener('click', async () => {
  const content = paragraph.textContent; // Get the text content

  // ***CHRIS** please dont hate me .....HTTP POST request to server and it should save
  try {
    const response = await fetch('/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }), 
    });

    if (response.ok) {
      console.log('Content saved successfully');
    } else {
      console.error('Failed to save content');
    }
  } catch (error) {
    console.error('Error while saving content:', error);
  }
});

};

// // old journal code (( dont delete ))
// document.addEventListener('DOMContentLoaded', function () {
//   const pages = document.querySelectorAll('.page'); // all page elements
//   const innerPage = document.querySelectorAll('.inner-page'); // all inner page elements
//   const editorText = document.querySelector('.editor-text'); // text editor input
//   const addTextBtn = document.querySelector('.add-text-btn'); // add text button
//   const deleteButton = document.querySelector('.delete-btn'); // delete button 


//   let activePage = null; 

//   // cycle through each page add click event
//   pages.forEach((page, index) => {
//     page.pageNum = index + 1; // Assign a page number to each page ** it wont go past 3 pages why ? **

//     page.addEventListener('click', function () {
//       //  flip class and set activePage to the clicked page 
//       if (this.pageNum % 2 === 0) {
//         this.classList.remove('flipped');
//         this.previousElementSibling.classList.remove('flipped');
//       } else {
//         this.classList.add('flipped');
//         this.nextElementSibling.classList.add('flipped');
//       }
//       activePage = this; // Set the activePage to the clicked page ** trying to get this to work better ** 
//     });
//   });

// window.onload = () => {
// const journalEntries = async () => {
//     const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/journal/entries',
//     {
//         method: 'GET',
//     });
//     const json = await result.json()
//     return json;
// }

// console.log(journalEntries())

// }


// //to create a journal entry space in which to generate the journal API data
// //still need to specify 
// const renderJournalEntry = async () => {
//     const journalEntries = await journalEntries();
//     journalEntries.forEach((entries) => {
//         const journalEntry = journalEntry(entries);
//         innerPage.appendChild(journalEntry);

        


// //serves as the template for the journal entry to be filled out by API data
//     journalEntry.innerHTML = `<div class="journal-container">
//     <div class="journal-header">
//       <h2 class="destination-name">${name}, ${country}</h2>
//       <h3 class="authored">by ${username}, on ${entryDate}</h3>
//     </div>
//     <div class="journal-body">
//       <div class="journal-entry">
//         <div class="journal-entry-header">
//           <h3 contentEditable="true" class="journal-title">${title}</h3>
//         </div>
//         <div class="journal-entry-body">
//           <p contentEditable="true">${entryContent}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>`

//     return journalEntry;
//   });
//   renderJournalEntry();
// }};


//   // Add text to the active page when the add text button is clicked ** its laggy af **
//   addTextBtn.addEventListener('click', function () {
//     if (activePage) {
//       const text = editorText.value; 
//       const textElement = document.createElement('div'); 
//       textElement.classList.add('text'); 
//       textElement.innerText = text; 
//       activePage.appendChild(textElement); 

//       // saves text to  server 
//       fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/journal/entries', {
//         method: 'POST',
//         body: JSON.stringify({ text: text }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(response => response.json())
//       .then(data => console.log('Text saved:', data))
//       .catch(error => console.error('Error saving text:', error));
//     }
//   });

//   //  delete button click to remove text
//   deleteButton.addEventListener('click', function () {
//     if (activePage) {
//       const textElements = activePage.querySelectorAll('.text'); //  all text  on the active page
//       textElements.forEach(element => element.remove()); // Remove each text element ** now idea how we should handle deleting **
//     }
//   });
// });