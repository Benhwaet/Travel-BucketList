// new code 
document.addEventListener('DOMContentLoaded', function () {
  const pages = document.querySelectorAll('.page'); // all page elements
  const editorText = document.querySelector('.editor-text'); // text editor input
  const addTextBtn = document.querySelector('.add-text-btn'); // add text button
  const deleteButton = document.querySelector('.delete-btn'); // delete button 

  let activePage = null; 

  // cycle through each page add click event
  pages.forEach((page, index) => {
    page.pageNum = index + 1; // Assign a page number to each page ** it wont go past 3 pages why ? **

    page.addEventListener('click', function () {
      //  flip class and set activePage to the clicked page 
      if (this.pageNum % 2 === 0) {
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      } else {
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
      activePage = this; // Set the activePage to the clicked page ** trying to get this to work better ** 
    });
  });

  // Add text to the active page when the add text button is clicked ** its laggy af **
  addTextBtn.addEventListener('click', function () {
    if (activePage) {
      const text = editorText.value; 
      const textElement = document.createElement('div'); 
      textElement.classList.add('text'); 
      textElement.innerText = text; 
      activePage.appendChild(textElement); 

      // saves text to  server 
      fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/journal/entries', {
        method: 'POST',
        body: JSON.stringify({ text: text }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log('Text saved:', data))
      .catch(error => console.error('Error saving text:', error));
    }
  });

  //  delete button click to remove text
  deleteButton.addEventListener('click', function () {
    if (activePage) {
      const textElements = activePage.querySelectorAll('.text'); //  all text  on the active page
      textElements.forEach(element => element.remove()); // Remove each text element ** now idea how we should handle deleting **
    }
  });
});



//  *** BENS CODE BELOW I TRIED TO UPDATE *** *** may delete if this new code works better ***
// // Select the journal section and delete entry buttons
// const journalSection = document.querySelector(".journal-section");

// // fetch journal entries from the server
// const fetchJournalEntries = async () => {
//     try {
//         const response = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/journal/entries');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching journal entries:", error);
//         return [];
//     }
// }

// // create a journal entry element
// const createJournalEntryElement = (entry) => {
//     const journalEntry = document.createElement("section");
//     journalEntry.classList.add("journal-entry");

//     const city = entry.city;
//     const country = entry.country;
//     const username = entry.username;
//     const entryDate = entry.entryDate;
//     const title = entry.title;
//     const entryContent = entry.entryContent;

//     journalEntry.innerHTML = `
//         <div class="journal-container">
//             <div class="journal-header">
//                 <h2 class="destination-name">${city}, ${country}</h2>
//                 <h3 class="authored">by ${username}, on ${entryDate}</h3>
//             </div>
//             <div class="journal-body">
//                 <div class="journal-entry">
//                     <div class="journal-entry-header">
//                         <h3 contentEditable="true" class="journal-title">${title}</h3>
//                     </div>
//                     <div class="journal-entry-body">
//                         <p contentEditable="true">${entryContent}</p>
//                     </div>
//                     <button class="save-entry">Save</button>
//                     <button class="delete-entry">Delete</button>
//                 </div>
//             </div>
//         </div>
//     `;

//     return journalEntry;
// };

// // Function to render journal entries on the page
// const renderJournalEntries = async () => {
//     const journalEntries = await fetchJournalEntries();
//     journalEntries.forEach((entry) => {
//         const journalEntryElement = createJournalEntryElement(entry);
//         journalSection.appendChild(journalEntryElement);
//     });
// }

// // Call the function to render journal entries
// renderJournalEntries();

// // Add event listeners to delete entry buttons
// journalSection.addEventListener("click", (event) => {
//     const deleteEntryBtn = event.target.closest(".delete-entry");
//     if (deleteEntryBtn) {
//         const journalEntry = deleteEntryBtn.closest(".journal-entry");
//         if (journalEntry) {
//             journalEntry.remove();
//             // Add code here to send a DELETE request to your API
//         }
//     }
// });