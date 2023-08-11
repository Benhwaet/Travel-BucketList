const bucketList = document.querySelector('#bucket-list');

const travelDestinationSeed = async () => {
    const response = await fetch('../../../backend/seeds/travelDestinationSeed.json', {
        method: 'GET',
    });
    const data = await response.json()
    return data
}

 console.log(travelDestinationSeed())


for (let i = 0; i < travelDestinationSeed.length; i++) {
    const travelDestinationData = {
        name: travelDestinationSeed[i].name,
        country: travelDestinationSeed[i].country,
        image: travelDestinationSeed[i].image,
        description: travelDestinationSeed[i].description,
        notes: travelDestinationSeed[i].notes,
        visited: travelDestinationSeed[i].visited
    }
    console.log(travelDestinationData.name);

const carouselCard = `
  <li class="bl-card-item">
    <section class="bl-card-body">
      <div class = "bl-card-main">
      <div>
        <div class="bl-card-header">
          <h3 class="bl-item-label">${travelDestinationData[i].name},${travelDestinationData[i].country} </h3>
        </div>
        <div class="bl-card-image">
          <img class="bl-location-image" src="${travelDestinationData[i].image}" 
          alt="location image from Unsplash or creative commons sources" />
        </div>
      </div>
      </div>
      <div class="bl-buttons-footer">
        <smart-button class="destination-info btn">
          <i class="icon fa-solid fa-circle-info"><a href="#tabs"></a></i>
        </smart-button>
            <div class="destination-info-content">
                <p>${travelDestinationData[i].description}</p>
            </div>
        <smart-button class="destination-notes btn">
          <i class="icon fa-solid fa-list"><a href="#journal"></a></i>
        </smart-button>
        <smart-button class="visited-destination btn">
          <i class="icon fa-solid fa-check"></i>
        </smart-button>
        <smart-button class="delete-destination btn" onclick="removeCard()">
          <i class="icon fa fa-trash"></i>
        </smart-button>
      </div>
    </section>
  </li>
`

console.log(travelDestinationData);

bucketList.insertAdjacentHTML('beforeend', carouselCard);
}