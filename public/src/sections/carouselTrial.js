
const destinations = async () => {
    const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/travelDestinations/destinations', 
    {
        method: 'GET',
    });
    const json = await result.json()
    return json;
  }

console.log(destinations());


class carouselCard {
    constructor (name, country, image, description, notes, visited) {
        this.name = name;
        this.country = country;
        this.image = image;
        this.description = description;
        this.notes = notes;
        this.visited = visited;

    this.createCard = function () {
        console.log(`Name: ${this.name}, Country: ${this.country}, Image: ${this.image}, Description: ${this.description}, Notes: ${this.notes}, Visited: ${this.visited}`);
    }
}
};
