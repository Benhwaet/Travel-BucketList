import "smart-webcomponents/source/modules/smart.carousel"

	document.readyState === 'complete' ? init() : window.onload = init;

	function init() { 
		const carousel = new Smart.Carousel('#carousel',  { dataSource:  [{ label: 'Slide 1', content: 'Content 1'}, 
        { label: 'Slide 2', content: 'Content 2'}, { label: 'Slide 3', content: 'Content 3'}] });
	}

Smart(
  "#carousel",
  class {
    get properties() {
      return {
        // data to be pulled from Amadeus (travel) and Unsplash (photos) APIs, saved to db, then displayed in carousel
        // initial images as placeholders to be used until connection to back-end
        dataSource: [
          { label: "Slide 1", content: "Content 1" },
          { label: "Slide 2", content: "Content 2" },
          { label: "Slide 3", content: "Content 3" },
        ],
      };
    }
  }
);

const carouselCard = `
<li class="smart-items-container bucket-list-item">
            <section class="card-item">
            <div class="card-main">
              <h3 class="smart-carousel-item-label">${location},${country}</h3>
              <img ${imageSource} />
            </div>
            <div class="buttons-container">
              <smart-button id="destination-info" class="btn">
                <i class="icon fa-solid fa-circle-info"></i>
            </smart-button>
              <smart-button id="destination-notes" class="btn">
                <i class="icon fa-solid fa-list"></i>
              </smart-button>
              <smart-button id="destination-visited" class="btn">
                <i class="icon fa-regular fa-circle-check"></i>
              </smart-button>
              <smart-button id="delete-destination" class="btn">
                <i class="icon fa fa-trash"></i>
              </smart-button>
            </div>
            </section>
          </li>`


const infoBtn = document.getElementById("destination-info");
const noteBtn = document.getElementsById("destination-notes");
const checkBtn = document.getElementById("destination-visited");
const deleteBtn = document.getElementById("delete-destination");
const icon = document.getElementsByClassName("icon");

infoBtn.addEventListener("click", () => {
  
});

noteBtn.addEventListener("click", () => {

});

checkBtn.addEventListener('click', () => {

});

deleteBtn.addEventListener("click", () => {
  
});