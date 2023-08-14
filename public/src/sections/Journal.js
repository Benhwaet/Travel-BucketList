const journalSection = document.querySelector(".journal-section");
const deleteEntryBtn = document.querySelector(".delete-entry");

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
