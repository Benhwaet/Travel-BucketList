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

window.onload = () => {
const journalEntries = async () => {
    const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/journal/entries',
    {
        method: 'GET',
    });
    const json = await result.json()
    return json;
}

const journalEntriesData = journalEntries();
return journalEntriesData;
};

console.log(journalEntriesData)

const renderJournalEntry = async () => {
    const journalEntries = await journalEntriesData();
    journalEntries.forEach((entries) => {
        const journalEntry = journalEntry(entries);
        journalSection.appendChild(journalEntry);
    });
}

renderJournalEntry();

deleteEntryBtn.addEventListener("click", () => {
    console.log('delete button clicked');
    journalEntry.remove();
});

const journalEntry = (entries) => {
    const journalEntry = document.createElement("section");
    journalEntry.classList.add("journal-entry");

    const city = entries.city;
    const country = entries.country;
    const username = entries.username;
    const entryDate = entries.entry-date;
    const title = entries.title;
    const entryContent = entries.entry-content;

    console.log(entries)



//serves as the template for the journal entry to be filled out by API data
    journalEntry.innerHTML = `<div class="journal-container">
    <div class="journal-header">
      <h2 class="destination-name">${city}, ${country}</h2>
      <h3 class="authored">by ${username}, on ${entryDate}</h3>
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

    return journalEntry;
};

const renderJournalEntries = async () => {
    const journalEntries = await journalEntriesData;
    journalEntries.forEach((entry) => {
        const journalEntry = journalEntry(entry);
        journalSection.appendChild(journalEntry);
    });
  };

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