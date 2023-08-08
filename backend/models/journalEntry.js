// schema and attributes for the user table
// interact with the journal entry data in the database ???

// Function to retrieve existing entries from local storage
function getJournalEntries() {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    return entries;
  }
  
  // Function to save new entry to local storage
  function saveEntry(entry) {
    const entries = getJournalEntries();
    entries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }
  // Keeping here if we need display entries, if no need you can remove.
  // Function to display journal entries on the page
  function displayJournalEntries() {
    const journalEntriesDiv = document.getElementById('journalEntries');
    const entries = getJournalEntries();
  
    journalEntriesDiv.innerHTML = '';
  
    entries.forEach((entry, index) => {
      const entryDiv = document.createElement('div');
      entryDiv.classList.add('entry');
      entryDiv.innerText = `Entry ${index + 1}: ${entry}`;
      journalEntriesDiv.appendChild(entryDiv);
    });
  }
  
  // Event listener to save entry on button click
  document.getElementById('saveEntry').addEventListener('click', function () {
    const entryInput = document.getElementById('entry');
    const entryValue = entryInput.value.trim();
  
    if (entryValue) {
      saveEntry(entryValue);
      entryInput.value = '';
      displayJournalEntries();
    }
  });
  
  // Display existing entries on page load
  displayJournalEntries();
  