import "../../../node_modules/smart-webcomponents/source/modules/smart.carousel"

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
