
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