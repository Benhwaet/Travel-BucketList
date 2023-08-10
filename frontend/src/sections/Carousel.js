
// 	document.readyState === 'complete' ? init() : window.onload = init;

// 	function init() { 
// 		const carousel = new Smart.Carousel('#carousel',  { dataSource:  [{ label: 'Slide 1', content: 'Content 1'}, 
//         { label: 'Slide 2', content: 'Content 2'}, { label: 'Slide 3', content: 'Content 3'}] });
// 	}

// Smart(
//   "#carousel",
//   class {
//     get properties() {
//       return {
//         // data to be pulled from Amadeus (travel) and Unsplash (photos) APIs, saved to db, then displayed in carousel
//         // initial images as placeholders to be used until connection to back-end
//         dataSource: [
//           { label: "Slide 1", content: "Content 1" },
//           { label: "Slide 2", content: "Content 2" },
//           { label: "Slide 3", content: "Content 3" },
//         ],
//       };
//     }
//   }
// );

// $( function() {
//   $( "#tabs" ).tabs({
//     collapsible: true
//   });
// } );

document.addEventListener('DOMContentLoaded', () => {
    const infoBtn = document.getElementById("destination-info");
    const noteBtn = document.getElementById("destination-notes");
    const checkBtn = document.getElementById("visited-destination");
    const deleteBtn = document.getElementById("delete-destination");
    const icon = document.querySelector(".icon");


// infoBtn.addEventListener("click", () => {
//   //open dropdown, or dropup with info about location
//   //taken from Amadeus API
// });

// noteBtn.addEventListener("click", () => {
//   //linked to location entry in journal? Or display a text box?
// });

//not functioning, but kept to keep the general idea 
//of class changing to alter the icon upon click
checkBtn.addEventListener('click', () => {
  if(icon.classList.contains("fa-check")) {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-circle-check");
  } else if (icon.classList.contains("fa-circle-check")){
    icon.classList.remove("fa-circle-check");
    icon.classList.add("fa-check");
  }
});

deleteBtn.addEventListener("click", () => {
  //connect button to entire great-grandparent element
  //to remove entire card from carousel
  getElementByClassName("bl-card-item").remove();
});

// removeCard = () => {
//  getElementsByClassName("bl-card-item").remove(); 
// }

});