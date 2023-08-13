const journalSection = document.querySelector(".journal-section");




const journalEntry = `  
<section class="journal-section">
      <secttion id="journat-entry">
        <div class="journal-container">
          <div class="journal-header">
            <h2 class="destination-name">${city}, ${country}</h2>
            <h3 class="authored">by ${username}, on ${entry-date}</h3>
          </div>
          <div class="journal-body">
            <div class="journal-entry">
              <div class="journal-entry-header">
                <h3 contentEditable="true" class="journal-title">${title}</h3>
              </div>
              <div class="journal-entry-body">
                <p contentEditable="true">${entry-content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  </section>`;