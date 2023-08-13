const journalSection = document.querySelector(".journal-section");
const deleteEntryBtn = document.querySelector(".delete-entry");

const journalEntries = async () => {
    const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/journalEntries/entries',
    {
        method: 'GET',
    });
    const json = await result.json()
    return json;
}

const journalEntriesData = journalEntries();
console.log(journalEntriesData);

const journalEntry = (entry) => {
    const journalEntry = document.createElement("section");
    journalEntry.classList.add("journal-entry");

    const city = entry.city;
    const country = entry.country;
    const username = entry.username;
    const entryDate = entry.entry-date;
    const title = entry.title;
    const entryContent = entry.entry-content;

    console.log(entry)



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
}

renderJournalEntries();

deleteEntryBtn.addEventListener("click", () => {
    console.log('delete button clicked');
    journalEntry.remove();
});